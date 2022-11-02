import { Component, Input } from "@angular/core";

import { Utils } from "@bitwarden/common/misc/utils";

type CharacterTypes = "letter" | "emoji" | "special" | "number";

@Component({
  selector: "color-password",
  template: `
    <span *ngFor="let character of passwordArray; index as i" [class]="characterClass(character)">
      {{ character }}
      <span *ngIf="showCount" class="">{{ i + 1 }}</span>
    </span>
  `,
})
export class ColorPasswordComponent {
  @Input() private password: string = null;
  @Input() showCount = false;

  // TODO: fix styling, this is just a quick job
  characterStyles: Record<CharacterTypes, string[]> = {
    letter: ["tw-text-main"],
    emoji: [""], // ??
    special: ["tw-text-danger"],
    number: ["tw-text-primary-500"],
  };

  get passwordArray() {
    // Convert to an array to handle cases that stings have special characters, ie: emoji.
    return Array.from(this.password);
  }

  sanitizeCharacter(character: string): string {
    switch (character) {
      case "&":
        character = "&amp;";
        break;
      case "<":
        character = "&lt;";
        break;
      case ">":
        character = "&gt;";
        break;
      case " ":
        character = "&nbsp;";
        break;
      default:
        break;
    }

    return character;
  }

  characterClass(character: string) {
    const charType = this.characterType(character);
    return this.characterStyles[charType];
  }

  private characterType(character: string): CharacterTypes {
    if (character.match(Utils.regexpEmojiPresentation)) {
      return "emoji";
    }

    if (character.match(/\d/)) {
      return "number";
    }

    const specials = ["&", "<", ">", " "];
    if (specials.includes(character) || character.match(/[^\w ]/)) {
      return "special";
    }

    return "letter";
  }
}
