// Technisches & Software-Ingenieur-Deutsch (B2/C1)
// Vorbereitung auf Softwareentwicklung, Informatik, Cloud, Data Engineering & IT-Teams

export const ENGINEERING_DATA = {
  title: "Software-, Computer- & Ingenieur-Deutsch (B2/C1)",
  provenance: "ERGÄNZT",
  description: "Fachwortschatz, Redemittel und Diskussionsmuster für Softwareentwicklung, IT-Architektur, Code Reviews und agile Teams.",
  categories: [
    {
      name: "Software-Architektur & Systementwurf",
      vocabulary: [
        {
          word: "die Skalierbarkeit",
          article: "die",
          level: "B2/C1",
          definition: "Die Fähigkeit eines Softwaresystems, bei steigender Benutzerlast ohne Leistungseinbußen zu wachsen.",
          exampleGerman: "Durch die Migration auf Kubernetes gewährleisten wir die horizontale Skalierbarkeit des Backends.",
          exampleEnglish: "Through migration to Kubernetes, we ensure the horizontal scalability of the backend."
        },
        {
          word: "der Flaschenhals (das Bottleneck)",
          article: "der",
          level: "B2",
          definition: "Die langsamste Komponente im System, welche die Gesamtleistung limitiert.",
          exampleGerman: "Die synchrone Festplatten-I/O stellte sich im Profiling als der primäre Flaschenhals heraus.",
          exampleEnglish: "Synchronous disk I/O turned out to be the primary bottleneck during profiling."
        },
        {
          word: "das Refactoring",
          article: "das",
          level: "B2",
          definition: "Die Überarbeitung und Säuberung des Quellcodes ohne Veränderung der externen Funktionalität.",
          exampleGerman: "Vor dem nächsten Release führen wir ein gründliches Refactoring der Legacy-Module durch.",
          exampleEnglish: "Prior to the next release, we conduct a thorough refactoring of the legacy modules."
        },
        {
          word: "die Entkopplung",
          article: "die",
          level: "C1",
          definition: "Die Trennung von Modulen, sodass Änderungen in Modul A keine unerwünschten Seiteneffekte in Modul B erzeugen.",
          exampleGerman: "Durch Event-Driven Architecture erreichen wir eine lose Entkopplung der Microservices.",
          exampleEnglish: "Through event-driven architecture, we achieve loose decoupling of microservices."
        }
      ]
    },

    {
      name: "DevOps, Cloud & Datenpipelines",
      vocabulary: [
        {
          word: "die Bereitstellung (das Deployment)",
          article: "die",
          level: "B2",
          definition: "Das automatische Übertragen und Starten einer neuen Softwareversion auf dem Produktionsserver.",
          exampleGerman: "Die CI/CD-Pipeline führt die automatisierte Bereitstellung nach erfolgreichen Unit-Tests aus.",
          exampleEnglish: "The CI/CD pipeline executes automated deployment following successful unit tests."
        },
        {
          word: "die Ausfallsicherheit (High Availability)",
          article: "die",
          level: "C1",
          definition: "Die Eigenschaft eines Systems, auch bei Hardware- oder Serverausfällen kontinuierlich weiterzulaufen.",
          exampleGerman: "Multi-Region-Cluster garantieren maximale Ausfallsicherheit bei Cloud-Hostern.",
          exampleEnglish: "Multi-region clusters guarantee maximum fault tolerance with cloud providers."
        },
        {
          word: "die Latenz (die Verzögerungszeit)",
          article: "die",
          level: "B2/C1",
          definition: "Die Zeitspanne zwischen dem Absenden einer Anfrage und dem Eintreffen der Antwort.",
          exampleGerman: "Die Redis-Caching-Schicht konnte die Latenz der API von 250 ms auf 12 ms reduzieren.",
          exampleEnglish: "The Redis caching layer was able to reduce API latency from 250 ms to 12 ms."
        }
      ]
    },

    {
      name: "IT-Besprechungen, Code Reviews & Agilität",
      vocabulary: [
        {
          word: "die Testabdeckung (Code Coverage)",
          article: "die",
          level: "B2",
          definition: "Der prozentuale Anteil des Quellcodes, der durch automatisierte Tests abgedeckt ist.",
          exampleGerman: "Wir streben eine Testabdeckung von mindestens 85 % für alle Kernmodule an.",
          exampleEnglish: "We aim for a code coverage of at least 85% across all core modules."
        },
        {
          word: "der Meilenstein",
          article: "der",
          level: "B2",
          definition: "Ein zentrales Zwischenziel im Projektplan, an dem wichtige Teilergebnisse abgeschlossen sind.",
          exampleGerman: "Mit dem erfolgreichen Lasttest haben wir den zweiten Meilenstein im Sprint erreicht.",
          exampleEnglish: "With the successful load test, we reached the second milestone in the sprint."
        }
      ]
    }
  ]
};
