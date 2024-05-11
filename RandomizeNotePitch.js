var SCRIPT_TITLE = "Randomize Note Pitch";

function getClientInfo() {
  return {
    "name" : SV.T(SCRIPT_TITLE),
    "author" : "LuciozUndiezz",
    "versionNumber" : 1,
    "minEditorVersion" : 65537
  };
}

function getTranslations(langCode) {
  if(langCode == "ja-jp") {
    return [
      ["Randomize Note Pitch", "音符の音程をランダムに変更"],
      ["Can't randomize selected notes.", "選択した音符の音程をランダムに変更できません。"]
    ];
  }
  if(langCode == "zh-cn") {
    return [
      ["Randomize Note Pitch", "随机改变音符音高"],
      ["Can't randomize selected notes.", "无法随机改变所选音符的音高。"]
    ];
  }
  return [];
}

function main() {
  // Get the current selection, scope (group reference) and its target group.
  var selection = SV.getMainEditor().getSelection();
  var selectedNotes = selection.getSelectedNotes();
  var scope = SV.getMainEditor().getCurrentGroup();
  var group = scope.getTarget();
  
  // No note or only one note is selected.
  if(selectedNotes.length < 1) {
    SV.finish();
    return;
  }

  for(var i = 0; i < selectedNotes.length; i ++) {
    var note = selectedNotes[i];
    // Randomize pitch within an octave range.
    var randomPitchOffset = Math.floor(Math.random() * 12); // 0 to 11 (half-steps)
    var currentPitch = note.getPitch();
    var randomizedPitch = currentPitch + randomPitchOffset;
    note.setPitch(randomizedPitch);
  }

  SV.finish();
}
