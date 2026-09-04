/* =========================================================================
   data.js — Contenu du cours (démo). Deux modules, cinq chapitres.
   Chaque chapitre = { theory, practice[], exam.questions[] }
   "accept" = liste de motifs (chaîne exacte ou RegExp) acceptés comme bons.
   ========================================================================= */

const COURSE = {
  modules: [
    {
      id: "linux-basics",
      title: { fr: "Module 1 — Se repérer sous Kali Linux", en: "Module 1 — Finding your way around Kali Linux" },
      chapters: [
        {
          id: "pwd-cd",
          title: { fr: "cd — se déplacer dans l'arborescence", en: "cd — moving through the filesystem" },
          intro: {
            fr: "Sous Kali, tout est rangé dans une arborescence unique qui part de la racine <code>/</code>. Avant de lancer le moindre outil, il faut savoir où l'on se trouve et comment se déplacer.",
            en: "On Kali, everything lives in a single tree starting at the root <code>/</code>. Before running any tool, you need to know where you are and how to move around."
          },
          theory: [
            {
              fr: "<code>pwd</code> (print working directory) affiche le dossier dans lequel tu te trouves actuellement.",
              en: "<code>pwd</code> (print working directory) shows the folder you are currently in."
            },
            {
              fr: "<code>cd &lt;chemin&gt;</code> (change directory) te déplace vers un autre dossier. Le chemin peut être <strong>absolu</strong> (il commence par <code>/</code>, ex. <code>/root/Bureau</code>) ou <strong>relatif</strong> à l'endroit où tu es (ex. <code>Bureau</code>).",
              en: "<code>cd &lt;path&gt;</code> (change directory) moves you to another folder. The path can be <strong>absolute</strong> (starts with <code>/</code>, e.g. <code>/root/Desktop</code>) or <strong>relative</strong> to where you are (e.g. <code>Desktop</code>)."
            },
            {
              fr: "Quelques raccourcis utiles : <code>cd ..</code> remonte d'un niveau, <code>cd ~</code> (ou <code>cd</code> seul) te ramène dans ton dossier personnel, et <code>cd -</code> te renvoie au dossier précédent.",
              en: "A few handy shortcuts: <code>cd ..</code> goes up one level, <code>cd ~</code> (or just <code>cd</code>) takes you back to your home folder, and <code>cd -</code> returns you to the previous folder."
            }
          ],
          practice: [
            {
              instruction: { fr: "Affiche le dossier dans lequel tu te trouves actuellement.", en: "Show the folder you are currently in." },
              accept: ["pwd"],
              output: { fr: "/root", en: "/root" },
              missingHint: { fr: "Il te faut une commande qui n'a pas besoin d'argument et qui « imprime » ta position actuelle.", en: "You need a command that takes no argument and \"prints\" your current position." }
            },
            {
              instruction: { fr: "Déplace-toi vers le dossier <code>/root/Bureau</code> (utilise un chemin absolu).", en: "Move into the <code>/root/Desktop</code> folder (use an absolute path)." },
              accept: ["cd /root/Bureau", "cd /root/Desktop"],
              output: { fr: "(aucune sortie — c'est normal, cd est silencieux en cas de succès)", en: "(no output — that's normal, cd stays silent on success)" },
              missingHint: { fr: "Il te manque soit la commande <code>cd</code>, soit le chemin cible après. Le chemin absolu commence par <code>/</code>.", en: "You're missing either the <code>cd</code> command itself, or the target path after it. An absolute path starts with <code>/</code>." }
            },
            {
              instruction: { fr: "Depuis ce dossier, remonte d'un seul niveau dans l'arborescence.", en: "From here, go back up exactly one level in the tree." },
              accept: ["cd .."],
              output: { fr: "/root", en: "/root" },
              missingHint: { fr: "Le raccourci pour « le dossier parent » est composé de deux points.", en: "The shortcut for \"the parent folder\" is two dots." }
            }
          ],
          exam: {
            questions: [
              { prompt: { fr: "Commande pour afficher ton dossier courant.", en: "Command to display your current folder." }, accept: ["pwd"], correction: { fr: "<code>pwd</code>", en: "<code>pwd</code>" } },
              { prompt: { fr: "Commande pour te rendre directement dans ton dossier personnel, en une seule lettre en plus de cd.", en: "Command to jump straight to your home folder, using one extra character after cd." }, accept: ["cd ~"], correction: { fr: "<code>cd ~</code>", en: "<code>cd ~</code>" } },
              { prompt: { fr: "Commande pour revenir au tout dernier dossier où tu étais avant ton déplacement actuel.", en: "Command to return to the very last folder you were in before this move." }, accept: ["cd -"], correction: { fr: "<code>cd -</code>", en: "<code>cd -</code>" } }
            ]
          }
        },
        {
          id: "ls",
          title: { fr: "ls — lister le contenu d'un dossier", en: "ls — listing folder contents" },
          intro: {
            fr: "Une fois qu'on sait se déplacer, il faut pouvoir regarder ce qu'il y a autour de soi : c'est le rôle de <code>ls</code>.",
            en: "Once you know how to move around, you need to look at what's around you — that's what <code>ls</code> is for."
          },
          theory: [
            { fr: "<code>ls</code> seul liste les fichiers et dossiers visibles du dossier courant.", en: "<code>ls</code> on its own lists the visible files and folders in the current directory." },
            { fr: "<code>ls -l</code> affiche une vue détaillée (permissions, propriétaire, taille, date). <code>ls -a</code> montre en plus les fichiers cachés (ceux qui commencent par un point). On peut combiner les deux avec <code>ls -la</code>.", en: "<code>ls -l</code> shows a detailed view (permissions, owner, size, date). <code>ls -a</code> also reveals hidden files (the ones starting with a dot). You can combine both with <code>ls -la</code>." }
          ],
          practice: [
            { instruction: { fr: "Liste simplement le contenu du dossier courant.", en: "Simply list the contents of the current folder." }, accept: ["ls"], output: { fr: "Bureau  Documents  Téléchargements  outils/", en: "Desktop  Documents  Downloads  tools/" }, missingHint: { fr: "Une commande de trois lettres suffit, sans option.", en: "A three-letter command is enough, no options needed." } },
            { instruction: { fr: "Liste maintenant le contenu, y compris les fichiers cachés, en vue détaillée.", en: "Now list the contents, including hidden files, in detailed view." }, accept: ["ls -la", "ls -al"], output: { fr: "drwx------  5 root root 4096 ... .\ndrwxr-xr-x 20 root root 4096 ... ..\n-rw-------  1 root root  120 ... .bash_history", en: "drwx------  5 root root 4096 ... .\ndrwxr-xr-x 20 root root 4096 ... ..\n-rw-------  1 root root  120 ... .bash_history" }, missingHint: { fr: "Il faut combiner deux options : une pour les détails, une pour les fichiers cachés.", en: "You need to combine two options: one for details, one for hidden files." } }
          ],
          exam: {
            questions: [
              { prompt: { fr: "Commande simple pour lister un dossier.", en: "Simple command to list a folder." }, accept: ["ls"], correction: { fr: "<code>ls</code>", en: "<code>ls</code>" } },
              { prompt: { fr: "Option de ls qui révèle les fichiers cachés.", en: "ls option that reveals hidden files." }, accept: ["ls -a", "-a"], correction: { fr: "<code>ls -a</code>", en: "<code>ls -a</code>" } },
              { prompt: { fr: "Commande combinant vue détaillée et fichiers cachés.", en: "Command combining detailed view and hidden files." }, accept: ["ls -la", "ls -al"], correction: { fr: "<code>ls -la</code>", en: "<code>ls -la</code>" } }
            ]
          }
        }
      ]
    },
    {
      id: "metasploit-basics",
      title: { fr: "Module 2 — Premiers pas avec Metasploit", en: "Module 2 — First steps with Metasploit" },
      chapters: [
        {
          id: "msfconsole-search",
          title: { fr: "msfconsole et search", en: "msfconsole and search" },
          intro: {
            fr: "Metasploit Framework est un ensemble d'outils d'audit et de test d'intrusion. <code>msfconsole</code> est son interface principale en ligne de commande.",
            en: "Metasploit Framework is a toolkit for security auditing and penetration testing. <code>msfconsole</code> is its main command-line interface."
          },
          theory: [
            { fr: "Depuis un terminal Kali, la commande <code>msfconsole</code> démarre l'interface de Metasploit. Le prompt devient alors <code>msf6 &gt;</code>.", en: "From a Kali terminal, the <code>msfconsole</code> command starts the Metasploit interface. The prompt then becomes <code>msf6 &gt;</code>." },
            { fr: "Une fois dedans, la commande <code>search &lt;mot-clé&gt;</code> permet de chercher un module (exploit, scanner, payload...) dans la base de Metasploit, par nom, par service ou par référence CVE.", en: "Once inside, the <code>search &lt;keyword&gt;</code> command looks up a module (exploit, scanner, payload...) in Metasploit's database, by name, service, or CVE reference." }
          ],
          practice: [
            { instruction: { fr: "Depuis le terminal Kali, lance l'interface de Metasploit.", en: "From the Kali terminal, start the Metasploit interface." }, accept: ["msfconsole"], output: { fr: "[msf6 démarre...]\nmsf6 >", en: "[msf6 starting...]\nmsf6 >" }, missingHint: { fr: "C'est le nom de l'outil lui-même, une seule commande, sans argument.", en: "It's the name of the tool itself, a single command, no argument." } },
            { instruction: { fr: "Cherche les modules liés au service <em>ftp</em>.", en: "Search for modules related to the <em>ftp</em> service." }, accept: ["search ftp"], output: { fr: "Matching Modules\n================\n  #  Name                                Disclosure Date  Rank\n  0  exploit/unix/ftp/vsftpd_234_backdoor 2011-07-03      excellent", en: "Matching Modules\n================\n  #  Name                                Disclosure Date  Rank\n  0  exploit/unix/ftp/vsftpd_234_backdoor 2011-07-03      excellent" }, missingHint: { fr: "Il te faut la commande de recherche suivie du mot-clé.", en: "You need the search command followed by the keyword." } }
          ],
          exam: {
            questions: [
              { prompt: { fr: "Commande pour démarrer Metasploit depuis un terminal.", en: "Command to start Metasploit from a terminal." }, accept: ["msfconsole"], correction: { fr: "<code>msfconsole</code>", en: "<code>msfconsole</code>" } },
              { prompt: { fr: "Commande pour chercher des modules concernant le service smb.", en: "Command to search for modules related to the smb service." }, accept: ["search smb"], correction: { fr: "<code>search smb</code>", en: "<code>search smb</code>" } }
            ]
          }
        },
        {
          id: "use-set-show",
          title: { fr: "use, show options et set", en: "use, show options and set" },
          intro: {
            fr: "Une fois un module repéré avec <code>search</code>, il faut le sélectionner puis le configurer avant de l'utiliser.",
            en: "Once a module is found with <code>search</code>, you need to select it and configure it before using it."
          },
          theory: [
            { fr: "<code>use &lt;chemin_du_module&gt;</code> sélectionne un module. Le prompt affiche alors son nom.", en: "<code>use &lt;module_path&gt;</code> selects a module. The prompt then shows its name." },
            { fr: "<code>show options</code> affiche les paramètres du module sélectionné : ceux déjà définis, et ceux qui sont encore requis (colonne <em>Required</em>).", en: "<code>show options</code> displays the selected module's parameters: which ones are already set, and which are still required (<em>Required</em> column)." },
            { fr: "<code>set &lt;PARAMETRE&gt; &lt;valeur&gt;</code> définit un paramètre, par exemple l'adresse de la cible (<code>RHOSTS</code>) ou le port (<code>RPORT</code>).", en: "<code>set &lt;PARAMETER&gt; &lt;value&gt;</code> sets a parameter, for example the target address (<code>RHOSTS</code>) or the port (<code>RPORT</code>)." }
          ],
          practice: [
            { instruction: { fr: "Sélectionne le module <code>exploit/unix/ftp/vsftpd_234_backdoor</code>.", en: "Select the <code>exploit/unix/ftp/vsftpd_234_backdoor</code> module." }, accept: ["use exploit/unix/ftp/vsftpd_234_backdoor"], output: { fr: "msf6 exploit(unix/ftp/vsftpd_234_backdoor) >", en: "msf6 exploit(unix/ftp/vsftpd_234_backdoor) >" }, missingHint: { fr: "La commande pour sélectionner un module tient en trois lettres, suivie du chemin exact du module.", en: "The command to select a module is three letters, followed by the exact module path." } },
            { instruction: { fr: "Définis l'adresse de la cible sur <code>10.10.10.5</code>.", en: "Set the target address to <code>10.10.10.5</code>." }, accept: ["set RHOSTS 10.10.10.5", "set rhosts 10.10.10.5"], output: { fr: "RHOSTS => 10.10.10.5", en: "RHOSTS => 10.10.10.5" }, missingHint: { fr: "Utilise <code>set</code>, suivi du nom du paramètre pour l'hôte cible (au pluriel), puis de l'adresse.", en: "Use <code>set</code>, followed by the target-host parameter name (plural), then the address." } }
          ],
          exam: {
            questions: [
              { prompt: { fr: "Commande pour sélectionner le module exploit/windows/smb/ms17_010_eternalblue.", en: "Command to select the exploit/windows/smb/ms17_010_eternalblue module." }, accept: ["use exploit/windows/smb/ms17_010_eternalblue"], correction: { fr: "<code>use exploit/windows/smb/ms17_010_eternalblue</code>", en: "<code>use exploit/windows/smb/ms17_010_eternalblue</code>" } },
              { prompt: { fr: "Commande pour afficher les paramètres du module sélectionné.", en: "Command to show the selected module's parameters." }, accept: ["show options"], correction: { fr: "<code>show options</code>", en: "<code>show options</code>" } },
              { prompt: { fr: "Commande pour fixer le port cible (RPORT) à 445.", en: "Command to set the target port (RPORT) to 445." }, accept: ["set RPORT 445", "set rport 445"], correction: { fr: "<code>set RPORT 445</code>", en: "<code>set RPORT 445</code>" } }
            ]
          }
        },
        {
          id: "exploit-sessions",
          title: { fr: "exploit et sessions", en: "exploit and sessions" },
          intro: {
            fr: "Dernière étape : lancer le module configuré, puis gérer la session obtenue.",
            en: "Last step: launch the configured module, then manage the resulting session."
          },
          theory: [
            { fr: "Une fois tous les paramètres requis définis, <code>exploit</code> (ou <code>run</code>) lance le module.", en: "Once every required parameter is set, <code>exploit</code> (or <code>run</code>) launches the module." },
            { fr: "En cas de succès sur une cible, une session s'ouvre. <code>sessions -l</code> liste les sessions actives, et <code>sessions -i &lt;id&gt;</code> permet d'en reprendre une.", en: "On success, a session opens. <code>sessions -l</code> lists active sessions, and <code>sessions -i &lt;id&gt;</code> lets you interact with one." }
          ],
          practice: [
            { instruction: { fr: "Lance le module maintenant que tous les paramètres sont configurés.", en: "Launch the module now that every parameter is set." }, accept: ["exploit", "run"], output: { fr: "[*] Command shell session 1 opened", en: "[*] Command shell session 1 opened" }, missingHint: { fr: "Deux commandes très courtes font l'affaire ici : l'une évoque directement l'action, l'autre est plus générique.", en: "Two very short commands work here: one directly names the action, the other is more generic." } },
            { instruction: { fr: "Affiche la liste des sessions actives.", en: "Display the list of active sessions." }, accept: ["sessions -l", "sessions"], output: { fr: "Active sessions\n===============\n  Id  Type  Information\n  1   shell 10.10.10.5", en: "Active sessions\n===============\n  Id  Type  Information\n  1   shell 10.10.10.5" }, missingHint: { fr: "La commande de gestion des sessions, éventuellement suivie de l'option de listing.", en: "The session-management command, optionally followed by the listing option." } }
          ],
          exam: {
            questions: [
              { prompt: { fr: "Commande pour lancer un module déjà configuré.", en: "Command to launch an already-configured module." }, accept: ["exploit", "run"], correction: { fr: "<code>exploit</code> (ou <code>run</code>)", en: "<code>exploit</code> (or <code>run</code>)" } },
              { prompt: { fr: "Commande pour reprendre la session numéro 2.", en: "Command to interact with session number 2." }, accept: ["sessions -i 2"], correction: { fr: "<code>sessions -i 2</code>", en: "<code>sessions -i 2</code>" } }
            ]
          }
        }
      ]
    }
  ]
};
