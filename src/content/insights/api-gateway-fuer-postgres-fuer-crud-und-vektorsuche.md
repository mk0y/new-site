---
# layout: ../layouts/PostLayout.astro
title: API Gateway for Postgres for CRUD and vector search
author: Marko Jakic
readTime: 6
date: 2024-06-07
---

# API-Gateway für Postgres für CRUD und Vektorsuche

![Nodb hero image](../../assets/nodb-hero.jpg)

## Über das Projekt

Künstliche Intelligenz (KI) und Modelle des maschinellen Lernens (ML) verändern die Art und Weise, wie wir mit Informationen interagieren. Diese Modelle können auf große Datensätze zugreifen und große Datenmengen effektiv verarbeiten und nutzen, wodurch in unterschiedlichsten Branchen neue Möglichkeiten entstehen.

Aus erster Hand erfuhr das Nearup-Entwicklungsteam, wie viele Türen durch KI- und ML-Funktionen geöffnet wurden, und entschied sich daraufhin, mit einer eigenen Lösung zum Fortschritt beizutragen. Obwohl unsere Idee noch in Arbeit ist, möchten wir Ihnen einen kurzen Einblick in Nodb geben: ein API-Gateway, das moderne KI-Techniken nutzt, um mithilfe natürlicher Sprache Informationen zu extrahieren und die Komplexität von CRUD-Operationen, Paginierung und Sortierung zu beseitigen.

Die Idee zu Nodb entstand aus unserem Wunsch, unseren Kolleginnen und Kollegen eine Vektorsuche anzubieten, die die Zeit für das Durchsuchen von Dokumenten reduziert. So kann man leichter verstehen, wie eine bestimmte Funktion funktioniert. Aus Sicht der Endnutzer vektorisiert Nodb ihre Fragen und gleicht sie mit dem nächsten Nachbarn ab, um sofortiges, detailliertes und relevantes Feedback zu liefern.

### Projektdauer

Das Nearup-Team begann im Januar 2024 mit der Entwicklung. Unsere nächsten Schritte umfassen die Integration mit einigen der größten Messaging- und Kollaborationstools wie WhatsApp, Telegram und Slack. Außerdem planen wir, die Abfragefunktionen für Dokumente durch native KI-Analyse und erweiterte Prompt-Funktionen zu verbessern.

### Unser Prozess und unsere Ziele

Wir entwickeln einen einheitlichen Zugriff auf verschiedene Datenbanken wie MongoDB, Postgres, Redis, MySQL und weitere. Nodb erstellt Einbettungsmodelle (Embeddings) aller gespeicherten Inhalte in seiner Datenbank. Diese Informationen können später über Natural Language Processing (NLP) abgerufen werden.

Unsere API vereinfacht die Datenbankzugriffe und den Installationsprozess. Durch das einheitliche API-Gateway entfällt die Notwendigkeit, für jede Datenbank separaten Code zu schreiben oder diese lokal im Projekt zu installieren. Stattdessen können sie nahtlos per HTTP angebunden werden.

Beachten Sie, dass die von uns entwickelte API ausschließlich JSON-Daten verarbeitet. Dies ermöglicht die Nutzung von OCR-Techniken (Optical Character Recognition), um Dokumente (z. B. PDFs) in JSON zu konvertieren und wie jeden anderen Datensatz in unserer Datenbank zu speichern.

### Wofür kann Nodb verwendet werden?

Was ist unser Ziel? In der einfachsten Form wollen wir es Nutzern ermöglichen, direkt mit ihrer Datenbank zu „sprechen“. Mithilfe einer Vektorsuche können wir semantische Suchen durchführen und Retrieval Augmented Generation (RAG) nutzen. Dabei wird der Chatverlauf als Kontextinformation verwendet, um eine sinnvolle Interaktion mit den Daten zu ermöglichen.

Stellen Sie sich zum Beispiel vor, ein Projektmanager möchte die Arbeit basierend auf den Fähigkeiten seines Teams verteilen. Er könnte fragen: „Beherrscht Anna React?“ Anhand der in der Datenbank verarbeiteten Informationen würde er eine Antwort erhalten wie: „Nein, sie hat keine React-Kenntnisse in ihrem Lebenslauf.“

![Nodb diagram](../../assets/Nodb-1.png)

Aber es ist noch viel komplexer. Das Nearup-Team hat die API so entwickelt, dass sie mehrere KI-Entwicklungsszenarien unterstützt, insbesondere:

### Dokumentationsintelligenz

Nodb ist dafür ausgelegt, verschiedene Dokumenttypen zu verarbeiten, darunter Personalausweise, Quittungen, PDF-Dateien, Bilder und mehr, die Nutzer über eine OCR-Technologie einreichen.

Dies ist besonders für Personalverantwortliche nützlich, die über Nodb beispielsweise „Vor- und Nachname, Fähigkeiten und die letzten beiden Arbeitgeber“ eines Bewerbers abfragen können. Wir glauben, dass unser Produkt die Zeit für die Durchsicht von Bewerberprofilen und das Durchstöbern großer Informationsmengen erheblich verkürzt, um die am besten geeigneten Kandidaten zu finden.

Darüber hinaus sind wir von der erfolgreichen Anwendung von Nodb im eCommerce überzeugt, wo herkömmliche Suchmethoden häufig daran scheitern, den Kontext und die Historie zu erfassen, die Nutzerpräferenzen beeinflussen. Mit den Vektorsuch-Funktionen unserer Lösung lassen sich Benutzeranfragen mit ihren spezifischen Informationen abgleichen, wie etwa Vorlieben, Interessen, Hobbys oder andere Daten, die in einer detaillierten Datenrepräsentation festgehalten werden. Dadurch können personalisierte Empfehlungen auf Basis von Ähnlichkeiten zum Nutzerprofil ausgesprochen werden.

#### Webseitenscraping und Inhaltserkennung

Unsere Vektorsuche wird das Erlebnis der Inhaltserkennung grundlegend verändern. Im Gegensatz zu traditionellen Suchmethoden, die sich auf Schlüsselwörter beschränken, repräsentiert die Vektorsuche Produktmerkmale als Vektoren in einem mehrdimensionalen Raum. Wenn Benutzer nach bestimmten Attributen suchen, werden ihre Suchanfragen mit den Vektoren aller Produkte im Datensatz verglichen. Durch die Ähnlichkeitsbewertung wird so rasch das Produkt identifiziert, das am besten zu den Vorlieben der Nutzer passt.

Auf diese Weise ermöglicht Nodb ein intuitiveres und persönlicheres Nutzererlebnis und steigert zugleich Effizienz und Zufriedenheit bei der Suche nach relevanten Optionen. Zum Beispiel können Nutzer eine URL zu einer Seite senden, über die sie mehr erfahren möchten, beliebige Fragen zu dieser Seite stellen und Informationen wie Title Tag, Meta-Beschreibung oder eine komplette Liste der dort vorgestellten Produkte abrufen (einschließlich wesentlicher Infos wie Produktname, Preis und Spezifikationen).

#### Verarbeitung natürlicher Sprache (NLP)

Bei der Entwicklung von Nodb haben wir auch daran gedacht, dass die Vektorsuche die Interaktion mit Technologien wie Chatbots, virtuellen Assistenten und Übersetzungs-Tools vertiefen kann, da sie diese dialogorientierter und intuitiver macht.

Benötigt ein Nutzer beispielsweise eine Vorlage für ein Memo, kann Nodb (durch Vektorsuche unterstützt) das Memo selbst generieren, indem es die vom Nutzer genannten Einschränkungen berücksichtigt. Wie funktioniert das? Indem NLP und Nächstnachbar-Vektoren aus ähnlichen Dokumenten in KI-LLMs genutzt werden, kann die Vektorsuche der KI helfen, Anfragen mit relevanten Informationen zu beantworten. Dieser Ansatz verbessert die Genauigkeit und Effizienz von NLP-Anwendungen und ermöglicht ein tieferes Verständnis von Nutzerabsicht und Kontext.

## Wichtige Nodb-Funktionen und Lösungen

Zum Zeitpunkt der Erstellung dieses Textes befindet sich Nodb noch in einer frühen Entwicklungsphase. Aus unseren Projektspezifikationen können wir jedoch bereits die folgenden Funktionen nennen, die wir schrittweise einführen werden:

1. Mehrere Umgebungen innerhalb jeder Anwendung  
2. Aufteilung der Ressourcen (Entities) in Anwendungssammlungen  
3. CRUD-Operationen für einzelne oder mehrere Entities (GET, POST, PUT, PATCH, DELETE)  
4. Vektorsuche mit verschiedenen Embedding-Modellen (OpenAI, Voyage AI)  
5. RAG-Funktion (Retrieval Augmented Generation) unter Verwendung verschiedener LLMs (OpenAI, Claude)  
6. Verarbeitung und Speicherung von Dokumenten (.pdf, .csv, .docx etc.)  
7. Benutzerdefinierte API-Optionen über Umgebungsvariablen  
8. One-Click Deployment auf Render
