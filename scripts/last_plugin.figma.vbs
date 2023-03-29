Set WshShell = WScript.CreateObject("WScript.Shell")
WshShell.AppActivate "Figma"
WshShell.SendKeys "^%p"
WshShell.AppActivate "Visual Studio Code"
Wscript.Echo "Sent keys to Figma"