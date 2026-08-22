// Speech & Web Audio Sound Effects Service
// Multi-Speed TTS (0.6x, 0.8x, 1.0x, 1.2x, 1.5x), Spracherkennung und Audiosynthesizer

class SpeechService {
  constructor() {
    this.synth = window.speechSynthesis;
    this.selectedVoice = null;
    this.audioCtx = null;
    this.currentRate = 0.95;
    this.initVoices();
  }

  initAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.audioCtx = new AudioContext();
    }
  }

  playSound(type) {
    try {
      this.initAudio();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      const now = this.audioCtx.currentTime;

      if (type === 'success') {
        // Bright victory chime
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
        osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.start(now);
        osc.stop(now + 0.6);
      } else if (type === 'error') {
        // Soft low tone
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.setValueAtTime(180, now + 0.1);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'pop') {
        // Subtle click/pop
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      }
    } catch (e) {}
  }

  initVoices() {
    if (!this.synth) return;
    const loadVoices = () => {
      const voices = this.synth.getVoices();
      this.selectedVoice = voices.find(v => v.lang.startsWith('de') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Katja') || v.name.includes('Marlene') || v.name.includes('Hedda'))) ||
                           voices.find(v => v.lang.startsWith('de')) ||
                           null;
    };
    loadVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = loadVoices;
    }
  }

  setRate(rate) {
    this.currentRate = parseFloat(rate) || 0.95;
  }

  speak(text, rate = null, onEnd = null) {
    if (!this.synth) return;
    this.synth.cancel();
    const clean = text.replace(/<[^>]*>?/gm, '').trim();
    if (!clean) return;

    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.lang = 'de-DE';
    utterance.rate = rate !== null ? parseFloat(rate) : this.currentRate;
    utterance.pitch = 1.0;
    if (this.selectedVoice) utterance.voice = this.selectedVoice;
    if (onEnd) utterance.onend = onEnd;
    this.synth.speak(utterance);
  }

  startRecognition(onResult, onError, onStart, onEnd) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      if (onError) onError('Spracherkennung wird in diesem Browser nicht unterstützt. Bitte nutze die manuelle Selbstbewertung.');
      return null;
    }
    const rec = new SpeechRecognition();
    rec.lang = 'de-DE';
    rec.continuous = false;
    rec.interimResults = false;
    rec.onstart = () => onStart && onStart();
    rec.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      if (onResult) onResult(transcript);
    };
    rec.onerror = (e) => onError && onError(e.error);
    rec.onend = () => onEnd && onEnd();
    try {
      rec.start();
      return rec;
    } catch (err) {
      if (onError) onError(err.message);
      return null;
    }
  }
}

export const Speech = new SpeechService();
