# WebTech20
Webtechnologien im Wintersemester 2020/21 (Studiengang Informatik und Wirtschaft an der HTW Berlin). Hier habe ich meine Lösungen zu den Übungsaufgaben abgelegt.

### Semesteraufgabe
Darüber hinaus findet sich hier meine Semesteraufgabe – eine Datenbank für Spiele (Eine kleine Erläuterung findet sich unter "Home" in der App.) Die Anwendung besteht aus den Ordnern "backend2" und "frontend4". Mittels der gitignore habe ich dafür gesorgt, dass sich die Zugangsdaten für meine Datenbank hier nicht wiederfinden.

Meine App ist mit Angular erstellt und hat ein Node.js-Backend. Dahinter liegt eine mySQL-Datenbank mit einer Tabelle für die Inhalte. Die Datensätze dieser Tabelle können über das Frontend aufgelistet, einzeln angezeigt, (einzeln) geändert, (einzeln) gelöscht und (einzeln) angelegt werden. Über das Frontend ist ein (gleichzeitiges) Löschen aller Datensätze nicht möglich. Bis auf das Feld "Bewertung" (rating) sind alle Felder (Name/gamename, Plattform/platform, Status/status) Pflichtfelder. Das Feld "Bewertung" kann auch leer bleiben. Die Id wird automatisch vergeben und hochgezählt, kann also von der Nutzerin nicht geändert werden.

Für das Styling habe ich sowohl Bootstrap als auch Material genutzt.

Eine Login-Funktionalität ist grundsätzlich angelegt. Dafür befindet sich eine weitere Tabelle in der Datenbank.

Ich habe für die Erstellung der Aufgabe das Skript genutzt und die Beispiele abgewandelt.

(Aus Versehen habe ich md5, jsonwebtoken und nodemon im frontend installiert.)
