"use strict";(self.webpackChunk_bitwarden_web_vault=self.webpackChunk_bitwarden_web_vault||[]).push([[754],{94754:(n,t,e)=>{e.r(t),e.d(t,{OrganizationImportExportModule:()=>Gn});var o=e(19419),a=e(98645),i=e(51470),r=e(55602),s=e(3906),c=e(56815),p=e(92785),u=e(75402),l=e(94820),f=e(2798),g=e(32100),d=e(70657),h=e(5012),m=e(42449),x=e(63628),U=e(7448),_=e(70291),v=e(65204),k=e(24852),y=e(14424),b=e(65332),w=e(1593),Q=e(27885),S=e(20510),Z=e(86290),I=e(24610),J=e(53707),N=e(70919),A=e(73484),Y=e(17404),E=function(n,t,e,o){return new(e||(e=Promise))((function(a,i){function r(n){try{c(o.next(n))}catch(t){i(t)}}function s(n){try{c(o.throw(n))}catch(t){i(t)}}function c(n){var t;n.done?a(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(r,s)}c((o=o.apply(n,t||[])).next())}))};function C(n,t){1&n&&(k.TgZ(0,"app-callout",13),k.ALo(1,"i18n"),k._uU(2),k.ALo(3,"i18n"),k.qZA()),2&n&&(k.s9C("title",k.lcZ(1,2,"vaultExportDisabled")),k.xp6(2),k.hij("\n    ",k.lcZ(3,4,"personalVaultExportPolicyInEffect"),"\n  "))}function B(n,t){if(1&n&&k._UZ(0,"app-export-scope-callout",14),2&n){const n=k.oxw();k.Q6J("organizationId",n.organizationId)}}function O(n,t){if(1&n&&(k.TgZ(0,"option",15),k._uU(1),k.qZA()),2&n){const n=t.$implicit;k.Q6J("value",n.value),k.xp6(1),k.Oqu(n.name)}}class T extends v.Y{constructor(n,t,e,o,a,i,r,s,c,p,u){super(n,t,e,o,a,r,s,c,p,u),this.route=i}ngOnInit(){const n=Object.create(null,{ngOnInit:{get:()=>super.ngOnInit}});return E(this,void 0,void 0,(function*(){this.route.parent.parent.params.subscribe((n=>E(this,void 0,void 0,(function*(){this.organizationId=n.organizationId})))),yield n.ngOnInit.call(this)}))}checkExportDisabled(){return E(this,void 0,void 0,(function*(){}))}getExportData(){return this.exportService.getOrganizationExport(this.organizationId,this.format)}getFileName(){return super.getFileName("org")}collectEvent(){return E(this,void 0,void 0,(function*(){yield this.eventService.collect(_.t.Organization_ClientExportedVault,null,null,this.organizationId)}))}}T.ɵfac=function(n){return new(n||T)(k.Y36(p.$),k.Y36(l.D),k.Y36(g.P),k.Y36(y.T),k.Y36(b.P),k.Y36(m.gz),k.Y36(w.d),k.Y36(Q.$),k.Y36(S.i),k.Y36(a.QS),k.Y36(Z._))},T.ɵcmp=k.Xpm({type:T,selectors:[["app-org-export"]],features:[k.qOj],decls:49,vars:18,consts:[["ngNativeValidate","",3,"appApiAction","formGroup","ngSubmit"],["form",""],[1,"page-header"],["type","error",3,"title",4,"ngIf"],[3,"organizationId",4,"ngIf"],[1,"row"],[1,"form-group","col-6"],["for","format"],["id","format","name","Format","formControlName","format",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["ngDefaultControl","","formControlName","secret","name","secret"],["type","submit",1,"btn","btn-primary","btn-submit",3,"disabled"],["aria-hidden","true",1,"bwi","bwi-spinner","bwi-spin",3,"title"],["type","error",3,"title"],[3,"organizationId"],[3,"value"]],template:function(n,t){if(1&n&&(k.TgZ(0,"form",0,1),k.NdJ("ngSubmit",(function(){return t.submit()})),k._uU(2,"\n  "),k.TgZ(3,"div",2),k._uU(4,"\n    "),k.TgZ(5,"h1"),k._uU(6),k.ALo(7,"i18n"),k.qZA(),k._uU(8,"\n  "),k.qZA(),k._uU(9,"\n\n  "),k.YNc(10,C,4,6,"app-callout",3),k._uU(11,"\n  "),k.YNc(12,B,1,1,"app-export-scope-callout",4),k._uU(13,"\n\n  "),k.TgZ(14,"div",5),k._uU(15,"\n    "),k.TgZ(16,"div",6),k._uU(17,"\n      "),k.TgZ(18,"label",7),k._uU(19),k.ALo(20,"i18n"),k.qZA(),k._uU(21,"\n      "),k.TgZ(22,"select",8),k._uU(23,"\n        "),k.YNc(24,O,2,2,"option",9),k._uU(25,"\n      "),k.qZA(),k._uU(26,"\n    "),k.qZA(),k._uU(27,"\n  "),k.qZA(),k._uU(28,"\n  "),k.TgZ(29,"div",5),k._uU(30,"\n    "),k.TgZ(31,"div",6),k._uU(32,"\n      "),k.TgZ(33,"app-user-verification",10),k._uU(34,"\n      "),k.qZA(),k._uU(35,"\n    "),k.qZA(),k._uU(36,"\n  "),k.qZA(),k._uU(37,"\n  "),k.TgZ(38,"button",11),k._uU(39,"\n    "),k._UZ(40,"i",12),k.ALo(41,"i18n"),k._uU(42,"\n    "),k.TgZ(43,"span"),k._uU(44),k.ALo(45,"i18n"),k.qZA(),k._uU(46,"\n  "),k.qZA(),k._uU(47,"\n"),k.qZA(),k._uU(48,"\n")),2&n){const n=k.MAs(1);k.Q6J("appApiAction",t.formPromise)("formGroup",t.exportForm),k.xp6(6),k.Oqu(k.lcZ(7,10,"exportVault")),k.xp6(4),k.Q6J("ngIf",t.disabledByPolicy),k.xp6(2),k.Q6J("ngIf",!t.disabledByPolicy),k.xp6(7),k.Oqu(k.lcZ(20,12,"fileFormat")),k.xp6(5),k.Q6J("ngForOf",t.formatOptions),k.xp6(14),k.Q6J("disabled",n.loading||t.exportForm.disabled),k.xp6(2),k.s9C("title",k.lcZ(41,14,"loading")),k.xp6(4),k.Oqu(k.lcZ(45,16,"exportVault"))}},dependencies:[o.sg,o.O5,I.b,J.O,N.N,A.W,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.sg,a.u,Y.C],encapsulation:2});var q=e(53173),V=e(41320),F=function(n,t,e,o){return new(e||(e=Promise))((function(a,i){function r(n){try{c(o.next(n))}catch(t){i(t)}}function s(n){try{c(o.throw(n))}catch(t){i(t)}}function c(n){var t;n.done?a(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(r,s)}c((o=o.apply(n,t||[])).next())}))};function P(n,t){1&n&&(k.TgZ(0,"app-callout",18),k._uU(1),k.ALo(2,"i18n"),k.qZA()),2&n&&(k.xp6(1),k.hij("\n  ",k.lcZ(2,1,"personalOwnershipPolicyInEffectImports"),"\n"))}function L(n,t){if(1&n&&(k.TgZ(0,"option",19),k._uU(1),k.qZA()),2&n){const n=t.$implicit;k.Q6J("ngValue",n.id),k.xp6(1),k.Oqu(n.name)}}function M(n,t){if(1&n&&(k.TgZ(0,"option",19),k._uU(1),k.qZA()),2&n){const n=t.$implicit;k.Q6J("ngValue",n.id),k.xp6(1),k.Oqu(n.name)}}function z(n,t){if(1&n&&(k.ynx(0),k._uU(1,"\n            "),k._UZ(2,"option",20),k._uU(3,"\n            "),k.YNc(4,M,2,2,"option",9),k._uU(5,"\n          "),k.BQk()),2&n){const n=k.oxw();k.xp6(4),k.Q6J("ngForOf",n.importOptions)}}function D(n,t){1&n&&(k.ynx(0),k._uU(1,"\n      See detailed instructions on our help site at\n      "),k.TgZ(2,"a",22),k._uU(3,"\n        https://bitwarden.com/help/export-your-data/"),k.qZA(),k._uU(4,"\n    "),k.BQk())}function j(n,t){1&n&&(k.ynx(0),k._uU(1,"\n      See detailed instructions on our help site at\n      "),k.TgZ(2,"a",23),k._uU(3,"\n        https://bitwarden.com/help/import-from-lastpass/"),k.qZA(),k._uU(4,"\n    "),k.BQk())}function K(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the KeePassX desktop application, navigate to "Database" → "Export to CSV file" and\n      save the CSV file.\n    '),k.BQk())}function X(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      In the Avira web vault, go to "Settings" → "My Data" → "Export data" and save the\n      CSV file.\n    '),k.BQk())}function R(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      In the Blur web vault, click your username at the top and go to "Settings" → "Export\n      Data", then click "Export CSV" for your "Accounts".\n    '),k.BQk())}function G(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the SaveInCloud desktop application, navigate to "File" → "Export" → "As XML"\n      and save the XML file.\n    '),k.BQk())}function $(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the Padlock desktop application, click the hamburger icon in the top left corner and\n      navigate to "Settings" → "Export" button and save the file "As CSV".\n    '),k.BQk())}function H(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the KeePass 2 desktop application, navigate to "File" → "Export" and select the\n      "KeePass XML (2.x)" option.\n    '),k.BQk())}function W(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the Universal Password Manager desktop application, navigate to "Database" →\n      "Export" and save the CSV file.\n    '),k.BQk())}function nn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the SaferPass browser extension, click the hamburger icon in the top left corner and\n      navigate to "Settings". Click the "Export accounts" button to save the CSV file.\n    '),k.BQk())}function tn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the Meldium web vault, navigate to "Settings". Locate the "Export data" function and\n      click "Show me my data" to save the CSV file.\n    '),k.BQk())}function en(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Log into the Keeper web vault (keepersecurity.com/vault). Click on your "account email" (top\n      right) and select "Settings". Go to "Export" and find the "Export to .csv File" option. Click\n      "Export" to save the CSV file.\n    '),k.BQk())}function on(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Log into the Keeper web vault (keepersecurity.com/vault). Click on your "account email" (top\n      right) and select "Settings". Go to "Export" and find the "Export to .json File" option. Click\n      "Export" to save the JSON file.\n    '),k.BQk())}function an(n,t){1&n&&(k.TgZ(0,"span"),k._uU(1,"\n        The process is exactly the same as importing from Google Chrome.\n      "),k.qZA())}function rn(n,t){if(1&n&&(k.ynx(0),k._uU(1,"\n      "),k.YNc(2,an,2,0,"span",10),k._uU(3,"\n      See detailed instructions on our help site at\n      "),k.TgZ(4,"a",24),k._uU(5,"\n        https://bitwarden.com/help/import-from-chrome/"),k.qZA(),k._uU(6,"\n    "),k.BQk()),2&n){const n=k.oxw(2);k.xp6(2),k.Q6J("ngIf","chromecsv"!==n.format)}}function sn(n,t){1&n&&(k.ynx(0),k._uU(1,"\n      See detailed instructions on our help site at\n      "),k.TgZ(2,"a",25),k._uU(3,"\n        https://bitwarden.com/help/import-from-firefox/"),k.qZA(),k._uU(4,".\n    "),k.BQk())}function cn(n,t){1&n&&(k.ynx(0),k._uU(1,"\n      See detailed instructions on our help site at\n      "),k.TgZ(2,"a",26),k._uU(3,"\n        https://bitwarden.com/help/import-from-safari/"),k.qZA(),k._uU(4,".\n    "),k.BQk())}function pn(n,t){1&n&&(k.ynx(0),k._uU(1,"\n      See detailed instructions on our help site at\n      "),k.TgZ(2,"a",27),k._uU(3,"\n        https://bitwarden.com/help/import-from-1password/"),k.qZA(),k._uU(4,".\n    "),k.BQk())}function un(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the Password Dragon desktop application, navigate to "File" → "Export" → "To\n      XML". In the dialog that pops up select "All Rows" and check all fields. Click the "Export"\n      button and save the XML file.\n    '),k.BQk())}function ln(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the Enpass desktop application, navigate to "File" → "Export" → "As CSV".\n      Select "OK" to the warning alert and save the CSV file. Note that the importer only supports\n      files exported while Enpass is set to the English language, so adjust your settings\n      accordingly.\n    '),k.BQk())}function fn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the Enpass 6 desktop application, click the menu button and navigate to "File" →\n      "Export". Select the ".json" file format option and save the JSON file.\n    '),k.BQk())}function gn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the Password Safe desktop application, navigate to "File" → "Export To" → "XML\n      format..." and save the XML file.\n    '),k.BQk())}function dn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Log in to Dashlane, click on "My Account" → "Settings" → "Export file" and select\n      "Export as a CSV file". This will download a zip archive containing various CSV files. Unzip\n      the archive and import each CSV file individually.\n    '),k.BQk())}function hn(n,t){1&n&&(k.ynx(0),k._uU(1,"\n      Dashlane no longer supports the JSON format. Only use this if you have an existing JSON for\n      import. Use the CSV importer when creating new exports.\n    "),k.BQk())}function mn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the mSecure desktop application, navigate to "File" → "Export" → "CSV File..."\n      and save the CSV file.\n    '),k.BQk())}function xn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the Sticky Password desktop application, navigate to "Menu" (top right) → "Export"\n      → "Export all". Select the unencrypted format XML option and save the XML file.\n    '),k.BQk())}function Un(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the True Key desktop application, click the gear icon (top right) and then navigate to\n      "App Settings". Click the "Export" button, enter your password and save the CSV file.\n    '),k.BQk())}function _n(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Log into the Clipperz web application (clipperz.is/app). Click the hamburger menu icon in the\n      top right to expand the navigation bar. Navigate to "Data" → "Export". Click the\n      "download HTML+JSON" button to save the HTML file.\n    '),k.BQk())}function vn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the RoboForm Editor desktop application, navigate to "RoboForm" (top left) →\n      "Options" → "Account & Data" and click the "Export" button. Select all of your data,\n      change the "Format" to "CSV file" and then click the "Export" button to save the CSV file.\n      Note: RoboForm only allows you to export Logins. Other items will not be exported.\n    '),k.BQk())}function kn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Log into the Passbolt web vault and navigate to the "Passwords" listing. Select all of the\n      passwords you would like to export and click the "Export" button at the top of the listing.\n      Choose the "csv (lastpass)" export format and click the "Export" button.\n    '),k.BQk())}function yn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the Ascendo DataVault desktop application, navigate to "Tools" → "Export". In the\n      dialog that pops up, select the "All Items (DVX, CSV)" option. Click the "Ok" button to save\n      the CSV file.\n    '),k.BQk())}function bn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the Password Boss desktop application, navigate to "File" → "Export data" →\n      "Password Boss JSON - not encrypted" and save the JSON file.\n    '),k.BQk())}function wn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Log into the Zoho web vault (vault.zoho.com). Navigate to "Tools" → "Export Secrets".\n      Select "All Secrets" and click the "Zoho Vault Format CSV" button. Highlight and copy the data\n      from the textarea. Open a text editor like Notepad and paste the data. Save the data from the\n      text editor as\n      '),k.TgZ(2,"code"),k._uU(3,"zoho_export.csv"),k.qZA(),k._uU(4,".\n    "),k.BQk())}function Qn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the SplashID Safe desktop application, click on the SplashID blue lock logo in the top\n      right corner. Navigate to "Export" → "Export as CSV" and save the CSV file.\n    '),k.BQk())}function Sn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the PassKeep mobile app, navigate to "Backup/Restore". Locate the "CSV Backup/Restore"\n      section and click "Backup to CSV" to save the CSV file.\n    '),k.BQk())}function Zn(n,t){1&n&&(k.ynx(0),k._uU(1,"\n      Make sure you have python-keyring and python-gnomekeyring installed. Save the\n      "),k.TgZ(2,"a",28),k._uU(3,"GNOME Keyring Import/Export"),k.qZA(),k._uU(4,"\n      python script to your desktop as "),k.TgZ(5,"code"),k._uU(6,"pw_helper.py"),k.qZA(),k._uU(7,". Open terminal and run\n      "),k.TgZ(8,"code"),k._uU(9,"chmod +rx Desktop/pw_helper.py"),k.qZA(),k._uU(10," and then\n      "),k.TgZ(11,"code"),k._uU(12,"python Desktop/pw_helper.py export Desktop/my_passwords.json"),k.qZA(),k._uU(13,". Then upload the\n      resulting "),k.TgZ(14,"code"),k._uU(15,"my_passwords.json"),k.qZA(),k._uU(16," file here to Bitwarden.\n    "),k.BQk())}function In(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Using the Password Agent desktop application navigate to "File" → "Export", select the\n      "Fields to export" button and check all of the fields, change the "Output format" to "CSV",\n      and then click the "Start" button to save the CSV file.\n    '),k.BQk())}function Jn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Log into the Passpack website vault and navigate to "Settings" → "Export", then click the\n      "Download" button to save the CSV file.\n    '),k.BQk())}function Nn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Open your Passman vault and click on "Settings" in the bottom left corner. In the "Settings"\n      window switch to the "Export credentials" tab and choose "JSON" as the export type. Enter your\n      vault\'s passphrase and click the "Export" button to save the JSON file.\n    '),k.BQk())}function An(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Open the Avast Passwords desktop application and navigate to "Settings" → "Import/export\n      data". Select the "Export" button for the "Export to CSV file" option to save the CSV file.\n    '),k.BQk())}function Yn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Open the Avast Passwords desktop application and navigate to "Settings" → "Import/export\n      data". Select the "Export" button for the "Export to JSON file" option to save the JSON file.\n    '),k.BQk())}function En(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Open the F-Secure KEY desktop application and navigate to "Settings" → "Export\n      Passwords". Select the "Export" button, enter your master password, and save the FSK file.\n    '),k.BQk())}function Cn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Open the Kaspersky Password Manager desktop application and navigate to "Settings" →\n      "Import/Export". Locate the "Export to text file" section and select the "Export" button to\n      save the TXT file.\n    '),k.BQk())}function Bn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Open the RememBear desktop application and navigate to "Settings" → "Account" →\n      "Export". Enter your master password and select the "Export Anyway" button to save the CSV\n      file.\n    '),k.BQk())}function On(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Open the PasswordWallet desktop application and navigate to "File" → "Export" →\n      "Visible entries to text file". Enter your password and select the "Ok" button to save the TXT\n      file.\n    '),k.BQk())}function Tn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Open the Myki desktop browser extension and navigate to "Advanced" → "Export Accounts"\n      and then scan the QR code with your mobile device. Various CSV files will then be saved to\n      your computer\'s downloads folder.\n    '),k.BQk())}function qn(n,t){1&n&&(k.ynx(0),k._uU(1,"\n      Export your SecureSafe password safe to a CSV file with a comma delimiter.\n    "),k.BQk())}function Vn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Open the LogMeOnce browser extension, then navigate to "Open Menu" → "Export To" and\n      select "CSV File" to save the CSV file.\n    '),k.BQk())}function Fn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Open the BlackBerry Password Keeper application, then navigate to "Settings" →\n      "Import/Export". Select "Export Passwords" and follow the instructions on screen to save the\n      unencrypted CSV file.\n    '),k.BQk())}function Pn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Open the Buttercup desktop application and unlock your vault. Right click on your vault\'s icon\n      and select "Export" to save the CSV file.\n    '),k.BQk())}function Ln(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      Open the Codebook desktop application and log in. Navigate to "File" → "Export all", then\n      click "Yes" on the dialog and save the CSV file.\n    '),k.BQk())}function Mn(n,t){1&n&&(k.ynx(0),k._uU(1,"\n      Open the newest version of the Encryptr desktop application and allow all of your data to\n      sync. Once syncing of your data is complete, the download icon in the top right corner will\n      turn pink. Click the download icon and save the CSV file.\n    "),k.BQk())}function zn(n,t){1&n&&(k.ynx(0),k._uU(1,'\n      From the Yoti browser extension, click on "Settings", then "Export Saved Logins" and save the\n      CSV file.\n    '),k.BQk())}function Dn(n,t){if(1&n&&(k.TgZ(0,"app-callout",21),k._uU(1,"\n    "),k.YNc(2,D,5,0,"ng-container",10),k._uU(3,"\n    "),k.YNc(4,j,5,0,"ng-container",10),k._uU(5,"\n    "),k.YNc(6,K,2,0,"ng-container",10),k._uU(7,"\n    "),k.YNc(8,X,2,0,"ng-container",10),k._uU(9,"\n    "),k.YNc(10,R,2,0,"ng-container",10),k._uU(11,"\n    "),k.YNc(12,G,2,0,"ng-container",10),k._uU(13,"\n    "),k.YNc(14,$,2,0,"ng-container",10),k._uU(15,"\n    "),k.YNc(16,H,2,0,"ng-container",10),k._uU(17,"\n    "),k.YNc(18,W,2,0,"ng-container",10),k._uU(19,"\n    "),k.YNc(20,nn,2,0,"ng-container",10),k._uU(21,"\n    "),k.YNc(22,tn,2,0,"ng-container",10),k._uU(23,"\n    "),k.YNc(24,en,2,0,"ng-container",10),k._uU(25,"\n    "),k.YNc(26,on,2,0,"ng-container",10),k._uU(27,"\n    "),k.YNc(28,rn,7,1,"ng-container",10),k._uU(29,"\n    "),k.YNc(30,sn,5,0,"ng-container",10),k._uU(31,"\n    "),k.YNc(32,cn,5,0,"ng-container",10),k._uU(33,"\n    "),k.YNc(34,pn,5,0,"ng-container",10),k._uU(35,"\n    "),k.YNc(36,un,2,0,"ng-container",10),k._uU(37,"\n    "),k.YNc(38,ln,2,0,"ng-container",10),k._uU(39,"\n    "),k.YNc(40,fn,2,0,"ng-container",10),k._uU(41,"\n    "),k.YNc(42,gn,2,0,"ng-container",10),k._uU(43,"\n    "),k.YNc(44,dn,2,0,"ng-container",10),k._uU(45,"\n    "),k.YNc(46,hn,2,0,"ng-container",10),k._uU(47,"\n    "),k.YNc(48,mn,2,0,"ng-container",10),k._uU(49,"\n    "),k.YNc(50,xn,2,0,"ng-container",10),k._uU(51,"\n    "),k.YNc(52,Un,2,0,"ng-container",10),k._uU(53,"\n    "),k.YNc(54,_n,2,0,"ng-container",10),k._uU(55,"\n    "),k.YNc(56,vn,2,0,"ng-container",10),k._uU(57,"\n    "),k.YNc(58,kn,2,0,"ng-container",10),k._uU(59,"\n    "),k.YNc(60,yn,2,0,"ng-container",10),k._uU(61,"\n    "),k.YNc(62,bn,2,0,"ng-container",10),k._uU(63,"\n    "),k.YNc(64,wn,5,0,"ng-container",10),k._uU(65,"\n    "),k.YNc(66,Qn,2,0,"ng-container",10),k._uU(67,"\n    "),k.YNc(68,Sn,2,0,"ng-container",10),k._uU(69,"\n    "),k.YNc(70,Zn,17,0,"ng-container",10),k._uU(71,"\n    "),k.YNc(72,In,2,0,"ng-container",10),k._uU(73,"\n    "),k.YNc(74,Jn,2,0,"ng-container",10),k._uU(75,"\n    "),k.YNc(76,Nn,2,0,"ng-container",10),k._uU(77,"\n    "),k.YNc(78,An,2,0,"ng-container",10),k._uU(79,"\n    "),k.YNc(80,Yn,2,0,"ng-container",10),k._uU(81,"\n    "),k.YNc(82,En,2,0,"ng-container",10),k._uU(83,"\n    "),k.YNc(84,Cn,2,0,"ng-container",10),k._uU(85,"\n    "),k.YNc(86,Bn,2,0,"ng-container",10),k._uU(87,"\n    "),k.YNc(88,On,2,0,"ng-container",10),k._uU(89,"\n    "),k.YNc(90,Tn,2,0,"ng-container",10),k._uU(91,"\n    "),k.YNc(92,qn,2,0,"ng-container",10),k._uU(93,"\n    "),k.YNc(94,Vn,2,0,"ng-container",10),k._uU(95,"\n    "),k.YNc(96,Fn,2,0,"ng-container",10),k._uU(97,"\n    "),k.YNc(98,Pn,2,0,"ng-container",10),k._uU(99,"\n    "),k.YNc(100,Ln,2,0,"ng-container",10),k._uU(101,"\n    "),k.YNc(102,Mn,2,0,"ng-container",10),k._uU(103,"\n    "),k.YNc(104,zn,2,0,"ng-container",10),k._uU(105,"\n  "),k.qZA()),2&n){const n=k.oxw();k.s9C("title",n.getFormatInstructionTitle()),k.xp6(2),k.Q6J("ngIf","bitwardencsv"===n.format||"bitwardenjson"===n.format),k.xp6(2),k.Q6J("ngIf","lastpasscsv"===n.format),k.xp6(2),k.Q6J("ngIf","keepassxcsv"===n.format),k.xp6(2),k.Q6J("ngIf","aviracsv"===n.format),k.xp6(2),k.Q6J("ngIf","blurcsv"===n.format),k.xp6(2),k.Q6J("ngIf","safeincloudxml"===n.format),k.xp6(2),k.Q6J("ngIf","padlockcsv"===n.format),k.xp6(2),k.Q6J("ngIf","keepass2xml"===n.format),k.xp6(2),k.Q6J("ngIf","upmcsv"===n.format),k.xp6(2),k.Q6J("ngIf","saferpasscsv"===n.format),k.xp6(2),k.Q6J("ngIf","meldiumcsv"===n.format),k.xp6(2),k.Q6J("ngIf","keepercsv"===n.format),k.xp6(2),k.Q6J("ngIf","keeperjson"===n.format),k.xp6(2),k.Q6J("ngIf","chromecsv"===n.format||"operacsv"===n.format||"vivaldicsv"===n.format),k.xp6(2),k.Q6J("ngIf","firefoxcsv"===n.format),k.xp6(2),k.Q6J("ngIf","safaricsv"===n.format),k.xp6(2),k.Q6J("ngIf","1password1pux"===n.format||"1password1pif"===n.format||"1passwordwincsv"===n.format||"1passwordmaccsv"===n.format),k.xp6(2),k.Q6J("ngIf","passworddragonxml"===n.format),k.xp6(2),k.Q6J("ngIf","enpasscsv"===n.format),k.xp6(2),k.Q6J("ngIf","enpassjson"===n.format),k.xp6(2),k.Q6J("ngIf","pwsafexml"===n.format),k.xp6(2),k.Q6J("ngIf","dashlanecsv"===n.format),k.xp6(2),k.Q6J("ngIf","dashlanejson"===n.format),k.xp6(2),k.Q6J("ngIf","msecurecsv"===n.format),k.xp6(2),k.Q6J("ngIf","stickypasswordxml"===n.format),k.xp6(2),k.Q6J("ngIf","truekeycsv"===n.format),k.xp6(2),k.Q6J("ngIf","clipperzhtml"===n.format),k.xp6(2),k.Q6J("ngIf","roboformcsv"===n.format),k.xp6(2),k.Q6J("ngIf","passboltcsv"===n.format),k.xp6(2),k.Q6J("ngIf","ascendocsv"===n.format),k.xp6(2),k.Q6J("ngIf","passwordbossjson"===n.format),k.xp6(2),k.Q6J("ngIf","zohovaultcsv"===n.format),k.xp6(2),k.Q6J("ngIf","splashidcsv"===n.format),k.xp6(2),k.Q6J("ngIf","passkeepcsv"===n.format),k.xp6(2),k.Q6J("ngIf","gnomejson"===n.format),k.xp6(2),k.Q6J("ngIf","passwordagentcsv"===n.format),k.xp6(2),k.Q6J("ngIf","passpackcsv"===n.format),k.xp6(2),k.Q6J("ngIf","passmanjson"===n.format),k.xp6(2),k.Q6J("ngIf","avastcsv"===n.format),k.xp6(2),k.Q6J("ngIf","avastjson"===n.format),k.xp6(2),k.Q6J("ngIf","fsecurefsk"===n.format),k.xp6(2),k.Q6J("ngIf","kasperskytxt"===n.format),k.xp6(2),k.Q6J("ngIf","remembearcsv"===n.format),k.xp6(2),k.Q6J("ngIf","passwordwallettxt"===n.format),k.xp6(2),k.Q6J("ngIf","mykicsv"===n.format),k.xp6(2),k.Q6J("ngIf","securesafecsv"===n.format),k.xp6(2),k.Q6J("ngIf","logmeoncecsv"===n.format),k.xp6(2),k.Q6J("ngIf","blackberrycsv"===n.format),k.xp6(2),k.Q6J("ngIf","buttercupcsv"===n.format),k.xp6(2),k.Q6J("ngIf","codebookcsv"===n.format),k.xp6(2),k.Q6J("ngIf","encryptrcsv"===n.format),k.xp6(2),k.Q6J("ngIf","yoticsv"===n.format)}}const jn=function(n){return{manual:n}};class Kn extends q.k{constructor(n,t,e,o,a,i,r,s){super(n,t,e,a,i,s),this.route=o,this.organizationService=r}ngOnInit(){const n=Object.create(null,{ngOnInit:{get:()=>super.ngOnInit}});return F(this,void 0,void 0,(function*(){this.route.parent.parent.params.subscribe((t=>F(this,void 0,void 0,(function*(){this.organizationId=t.organizationId,this.successNavigate=["organizations",this.organizationId,"vault"],yield n.ngOnInit.call(this),this.importBlockedByPolicy=!1}))));const t=yield this.organizationService.get(this.organizationId);this.organizationName=t.name}))}submit(){const n=Object.create(null,{submit:{get:()=>super.submit}});return F(this,void 0,void 0,(function*(){(yield this.platformUtilsService.showDialog(this.i18nService.t("importWarning",this.organizationName),this.i18nService.t("warning"),this.i18nService.t("yes"),this.i18nService.t("no"),"warning"))&&n.submit.call(this)}))}}Kn.ɵfac=function(n){return new(n||Kn)(k.Y36(l.D),k.Y36(f.Y),k.Y36(m.F0),k.Y36(m.gz),k.Y36(g.P),k.Y36(w.d),k.Y36(V.M),k.Y36(Q.$))},Kn.ɵcmp=k.Xpm({type:Kn,selectors:[["app-org-import"]],features:[k.qOj],decls:69,vars:31,consts:[[1,"page-header"],["type","info",4,"ngIf"],["ngNativeValidate","",3,"ngSubmit"],["form",""],[1,"row"],[1,"col-6"],[1,"form-group"],["for","type"],["id","type","name","Format","required","",1,"form-control",3,"ngModel","disabled","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],[4,"ngIf"],["type","info",3,"title",4,"ngIf"],["for","file"],["type","file","id","file","name","file",1,"form-control-file",3,"disabled"],["for","fileContents"],["id","fileContents","name","FileContents",1,"form-control",3,"ngModel","disabled","ngModelChange"],["type","submit",1,"btn","btn-primary","btn-submit",3,"disabled","ngClass"],["aria-hidden","true",1,"bwi","bwi-spinner","bwi-spin",3,"title"],["type","info"],[3,"ngValue"],["value","-","disabled",""],["type","info",3,"title"],["target","_blank","rel","noopener","href","https://bitwarden.com/help/export-your-data/"],["target","_blank","rel","noopener","href","https://bitwarden.com/help/import-from-lastpass/"],["target","_blank","rel","noopener","href","https://bitwarden.com/help/import-from-chrome/"],["target","_blank","rel","noopener","href","https://bitwarden.com/help/import-from-firefox/"],["target","_blank","rel","noopener","href","https://bitwarden.com/help/import-from-safari/"],["target","_blank","rel","noopener","href","https://bitwarden.com/help/import-from-1password/"],["target","_blank","rel","noopener","href","https://bit.ly/2GpOMTg"]],template:function(n,t){1&n&&(k.TgZ(0,"div",0),k._uU(1,"\n  "),k.TgZ(2,"h1"),k._uU(3),k.ALo(4,"i18n"),k.qZA(),k._uU(5,"\n"),k.qZA(),k._uU(6,"\n"),k.YNc(7,P,3,3,"app-callout",1),k._uU(8,"\n"),k.TgZ(9,"form",2,3),k.NdJ("ngSubmit",(function(){return t.submit()})),k._uU(11,"\n  "),k.TgZ(12,"div",4),k._uU(13,"\n    "),k.TgZ(14,"div",5),k._uU(15,"\n      "),k.TgZ(16,"div",6),k._uU(17,"\n        "),k.TgZ(18,"label",7),k._uU(19),k.ALo(20,"i18n"),k.qZA(),k._uU(21,"\n        "),k.TgZ(22,"select",8),k.NdJ("ngModelChange",(function(n){return t.format=n})),k._uU(23,"\n          "),k.YNc(24,L,2,2,"option",9),k._uU(25,"\n          "),k.YNc(26,z,6,1,"ng-container",10),k._uU(27,"\n        "),k.qZA(),k._uU(28,"\n      "),k.qZA(),k._uU(29,"\n    "),k.qZA(),k._uU(30,"\n  "),k.qZA(),k._uU(31,"\n  "),k.YNc(32,Dn,106,53,"app-callout",11),k._uU(33,"\n  "),k.TgZ(34,"div",4),k._uU(35,"\n    "),k.TgZ(36,"div",5),k._uU(37,"\n      "),k.TgZ(38,"div",6),k._uU(39,"\n        "),k.TgZ(40,"label",12),k._uU(41),k.ALo(42,"i18n"),k.qZA(),k._uU(43,"\n        "),k._UZ(44,"input",13),k._uU(45,"\n      "),k.qZA(),k._uU(46,"\n    "),k.qZA(),k._uU(47,"\n  "),k.qZA(),k._uU(48,"\n  "),k.TgZ(49,"div",6),k._uU(50,"\n    "),k.TgZ(51,"label",14),k._uU(52),k.ALo(53,"i18n"),k.qZA(),k._uU(54,"\n    "),k.TgZ(55,"textarea",15),k.NdJ("ngModelChange",(function(n){return t.fileContents=n})),k.qZA(),k._uU(56,"\n  "),k.qZA(),k._uU(57,"\n  "),k.TgZ(58,"button",16),k._uU(59,"\n    "),k._UZ(60,"i",17),k.ALo(61,"i18n"),k._uU(62,"\n    "),k.TgZ(63,"span"),k._uU(64),k.ALo(65,"i18n"),k.qZA(),k._uU(66,"\n  "),k.qZA(),k._uU(67,"\n"),k.qZA(),k._uU(68,"\n")),2&n&&(k.xp6(3),k.Oqu(k.lcZ(4,17,"importData")),k.xp6(4),k.Q6J("ngIf",t.importBlockedByPolicy),k.xp6(12),k.hij("1. ",k.lcZ(20,19,"selectFormat"),""),k.xp6(3),k.Q6J("ngModel",t.format)("disabled",t.importBlockedByPolicy),k.xp6(2),k.Q6J("ngForOf",t.featuredImportOptions),k.xp6(2),k.Q6J("ngIf",t.importOptions&&t.importOptions.length),k.xp6(6),k.Q6J("ngIf",t.format),k.xp6(9),k.hij("2. ",k.lcZ(42,21,"selectImportFile"),""),k.xp6(3),k.Q6J("disabled",t.importBlockedByPolicy),k.xp6(8),k.Oqu(k.lcZ(53,23,"orCopyPasteFileContents")),k.xp6(3),k.Q6J("ngModel",t.fileContents)("disabled",t.importBlockedByPolicy),k.xp6(3),k.Q6J("disabled",t.loading||t.importBlockedByPolicy)("ngClass",k.VKq(29,jn,t.importBlockedByPolicy)),k.xp6(2),k.s9C("title",k.lcZ(61,25,"loading")),k.xp6(4),k.Oqu(k.lcZ(65,27,"importData")))},dependencies:[o.mk,o.sg,o.O5,J.O,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.Q7,a.On,a.F,Y.C],encapsulation:2});const Xn=[{path:"import",component:Kn,canActivate:[U.v],data:{titleId:"importData",permissions:[x.P.AccessImportExport]}},{path:"export",component:T,canActivate:[U.v],data:{titleId:"exportVault",permissions:[x.P.AccessImportExport]}}];class Rn{}Rn.ɵfac=function(n){return new(n||Rn)},Rn.ɵmod=k.oAB({type:Rn}),Rn.ɵinj=k.cJS({imports:[m.Bz.forChild(Xn)]});class Gn{}Gn.ɵfac=function(n){return new(n||Gn)},Gn.ɵmod=k.oAB({type:Gn}),Gn.ɵinj=k.cJS({providers:[{provide:f.Y,useClass:d.Y,deps:[s.u,u.s,r.s,l.D,c.a,g.P,p.$]}],imports:[o.ez,i.b,h.f,a.u5,a.UX,Rn]})}}]);
//# sourceMappingURL=754.f54cf5d55066eeb47ad5.js.map