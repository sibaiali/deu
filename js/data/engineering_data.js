// High-Performance Software Engineering & Game Engine Tech-Deutsch (B2/C1)
// Authentische Frankfurt Crytek-Vibes: C++, 3D-Rendering, Shader, Concurrency & Profiling

export const ENGINEERING_DATA = {
  title: "High-Performance Engineering & Game Engine Systems (Frankfurt Tech-Vibes)",
  provenance: "ERGÄNZT",
  description: "Fachwortschatz, Redemittel und Architektur-Diskussionen für C++ High-Performance-Entwicklung, Real-Time Rendering Pipelines, GPU-Profiling und Memory Management im Frankfurter Tech-Umfeld (CryEngine / Crytek-Vibes).",
  categories: [
    {
      name: "Echtzeit-Rendering & Grafikschnittstellen",
      vocabulary: [
        {
          word: "die Rendering-Pipeline",
          article: "die",
          level: "B2/C1",
          definition: "Die Abfolge von Berechnungsstufen auf der GPU, durch die aus 3D-Geometrie und Shadern das finale 2D-Bild auf dem Monitor gerendert wird.",
          exampleGerman: "Im CryEngine-Renderer optimieren wir die Deferred-Shading-Stufe der Rendering-Pipeline, um Draw-Calls zu minimieren.",
          exampleEnglish: "In the CryEngine renderer, we optimize the deferred shading stage of the rendering pipeline to minimize draw calls."
        },
        {
          word: "der Shader (das Schattierungsprogramm)",
          article: "der",
          level: "B2/C1",
          definition: "Ein hochspezialisiertes Programm in HLSL/GLSL, das parallel auf Tausenden GPU-Kernen Beleuchtungs- und Oberflächeneffekte berechnet.",
          exampleGerman: "Der Vertex- und Pixel-Shader für volumetrischen Nebel verursacht auf älteren Grafikkarten erhebliche Framerate-Einbrüche.",
          exampleEnglish: "The vertex and pixel shader for volumetric fog causes significant framerate drops on older graphics cards."
        },
        {
          word: "die Framerate (die Bildwiederholrate)",
          article: "die",
          level: "B2",
          definition: "Die Anzahl gerenderter Einzelbilder pro Sekunde (Frames Per Second, FPS).",
          exampleGerman: "Unser Performance-Budget verlangt stabile 60 FPS bei einer 4K-Auflösung ohne Ruckler.",
          exampleEnglish: "Our performance budget demands a stable 60 FPS at 4K resolution without stuttering."
        }
      ]
    },

    {
      name: "C++ High Performance & Speicherverwaltung",
      vocabulary: [
        {
          word: "der Flaschenhals (das Bottleneck)",
          article: "der",
          level: "B2/C1",
          definition: "Die Systemkomponente (CPU, GPU-Bandbreite, RAM-I/O), welche die Gesamtausführungsgeschwindigkeit limitiert.",
          exampleGerman: "Das Profiling mit RenderDoc zeigte eindeutig: Wir sind CPU-limitiert bei den Physik-Berechnungen und nicht auf der GPU.",
          exampleEnglish: "Profiling with RenderDoc showed clearly: We are CPU-bound on physics calculations, not on the GPU."
        },
        {
          word: "die Speicherbereinigung (Memory Allocation & Leaks)",
          article: "die",
          level: "C1",
          definition: "Die gezielte Verwaltung von Heap-Speicher zur Vermeidung von Fragmentierung und Speicherlecks in performancekritischen Schleifen.",
          exampleGerman: "In der Game-Loop dürfen wir keine dynamischen Allokationen mit 'new' durchführen; wir nutzen feste Stack- und Pool-Allokatoren.",
          exampleEnglish: "In the game loop, we must not perform dynamic allocations with 'new'; we use fixed stack and pool allocators."
        },
        {
          word: "die Nebenläufigkeit (Multithreading / Concurrency)",
          article: "die",
          level: "C1",
          definition: "Die parallele Ausführung von Aufgaben auf mehreren CPU-Kernen ohne Race Conditions und Deadlocks.",
          exampleGerman: "Durch unser Job-System entkoppeln wir KI-Berechnungen, Animations-Rigging und Rendering auf separate Worker-Threads.",
          exampleEnglish: "Through our job system, we decouple AI calculations, animation rigging, and rendering onto separate worker threads."
        }
      ]
    },

    {
      name: "Agile Stand-ups & Tech-Meetings in Frankfurt",
      vocabulary: [
        {
          word: "das Profiling (die Laufzeitanalyse)",
          article: "das",
          level: "B2/C1",
          definition: "Das systematische Vermessen von CPU- und GPU-Takten zur Lokalisierung von Latenzen.",
          exampleGerman: "Lass uns nach dem Stand-up ein CPU-Profiling durchführen, um den Spiketerminanten zu isolieren.",
          exampleEnglish: "Let's run a CPU profiling after the stand-up to isolate the spike cause."
        },
        {
          word: "der Meilenstein (das Release)",
          article: "der",
          level: "B2",
          definition: "Ein fest definiertes Lieferdatum für eine Alpha-/Beta-Version der Engine oder des Spiels.",
          exampleGerman: "Vor dem nächsten Meilenstein müssen alle Unit-Tests in der CI/CD-Pipeline grün durchlaufen.",
          exampleEnglish: "Prior to the next milestone, all unit tests in the CI/CD pipeline must pass green."
        }
      ]
    }
  ]
};
