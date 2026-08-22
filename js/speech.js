// Speech Service — Web Speech API (TTS & SpeechRecognition) mit robuster Fallback-Logik

class SpeechService {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.voices = [];
    this.germanVoice = null;
    this.recognition = null;
    this.isListening = false;
    this.initVoices();
    this.initRecognition();
  }

  initVoices() {
    if (!this.synth) return;
    const load = () => {
      this.voices = this.synth.getVoices();
      this.germanVoice = this.voices.find(v => v.lang.startsWith('de')) || null;
    };
    load();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = load;
    }
  }

  initRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
    if (SpeechRecognition) {
      try {
        this.recognition = new SpeechRecognition();
        this.recognition.lang = 'de-DE';
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
      } catch (e) {
        console.warn('SpeechRecognition init failed:', e);
      }
    }
  }

  // Speak German text with adjustable speed
  speak(text, speed = 0.9) {
    if (!this.synth) {
      console.warn('TTS not supported in this browser.');
      return false;
    }
    this.synth.cancel(); // Stop ongoing speech
    const cleanText = text.replace(/[*_#]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'de-DE';
    utterance.rate = speed; // 0.6 = slow, 0.9 = normal, 1.1 = fast
    if (this.germanVoice) {
      utterance.voice = this.germanVoice;
    }
    this.synth.speak(utterance);
    return true;
  }

  stopSpeaking() {
    if (this.synth) this.synth.cancel();
  }

  // Start speech recognition with callback
  startListening(onResult, onError, onEnd) {
    if (!this.recognition) {
      if (onError) onError('Spracherkennung wird von diesem Browser nicht unterstützt. Bitte tippen Sie Ihre Antwort ein.');
      return false;
    }
    try {
      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        if (onResult) onResult(transcript);
      };
      this.recognition.onerror = (event) => {
        console.warn('Speech recognition error:', event.error);
        if (onError) onError(event.error);
      };
      this.recognition.onend = () => {
        this.isListening = false;
        if (onEnd) onEnd();
      };
      this.isListening = true;
      this.recognition.start();
      return true;
    } catch (e) {
      console.error('Failed to start recognition:', e);
      if (onError) onError(e.message);
      return false;
    }
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }
}

export const Speech = new SpeechService();
