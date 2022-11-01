import { DIALOG_DATA, DialogModule, DialogRef } from "@angular/cdk/dialog";
import { ComponentType } from "@angular/cdk/overlay";
import { Component, Inject, Input } from "@angular/core";
import { action } from "@storybook/addon-actions";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { firstValueFrom } from "rxjs";

import { I18nService } from "@bitwarden/common/abstractions/i18n.service";

import { ButtonModule } from "../button";
import { FormFieldModule } from "../form-field";
import { IconButtonModule } from "../icon-button";
import { SharedModule } from "../shared";
import { TabsModule } from "../tabs";
import { I18nMockService } from "../utils/i18n-mock.service";

import { DialogService } from "./dialog.service";
import { DialogComponent } from "./dialog/dialog.component";
import { DialogCloseDirective } from "./directives/dialog-close.directive";
import { DialogTitleContainerDirective } from "./directives/dialog-title-container.directive";

interface Animal {
  animal: string;
}

const actionsData = {
  onDialogClosed: action("onDialogClosed"),
};

@Component({
  selector: "app-story-dialog",
  template: `<button bitButton (click)="openDialog()">{{ buttonText }}</button>`,
})
class StoryDialogComponent {
  @Input() dialogContentComponent: ComponentType<unknown>;
  @Input() buttonText: string;

  constructor(public dialogService: DialogService) {}

  async openDialog() {
    const ref = this.dialogService.open(this.dialogContentComponent, {
      data: {
        animal: "panda",
      },
    });
    const result = await firstValueFrom(ref.closed);
    actionsData.onDialogClosed(result);
  }
}

@Component({
  selector: "story-dialog-content",
  template: `
    <bit-dialog dialogSize="large">
      <span bitDialogTitle>Dialog Title</span>
      <span bitDialogContent>
        Dialog body text goes here.
        <br />
        Animal: {{ animal }}
      </span>
      <div bitDialogFooter class="tw-flex tw-flex-row tw-gap-2">
        <button bitButton buttonType="primary" (click)="dialogRef.close()">Save</button>
        <button bitButton buttonType="secondary" bitDialogClose>Cancel</button>
      </div>
    </bit-dialog>
  `,
})
class StoryDialogContentComponent {
  constructor(public dialogRef: DialogRef, @Inject(DIALOG_DATA) private data: Animal) {}

  get animal() {
    return this.data?.animal;
  }
}

@Component({
  selector: "story-tabbed-dialog-content",
  template: `
    <bit-dialog dialogSize="large" disablePadding>
      <span bitDialogTitle>Tabbed Dialog Title</span>
      <span bitDialogContent>
        <bit-tab-group>
          <bit-tab label="First Tab">
            <p>
              You can navigate through all tab labels, form inputs, and the dialog controls via the
              keyboard.
            </p>
            <bit-form-field>
              <bit-label>First Input</bit-label>
              <input type="text" bitInput />
            </bit-form-field>
            <bit-form-field>
              <bit-label>Second Input</bit-label>
              <input type="text" bitInput />
            </bit-form-field>
          </bit-tab>
          <bit-tab label="Second Tab">Second Tab Content</bit-tab>
        </bit-tab-group>
      </span>
      <div bitDialogFooter class="tw-flex tw-flex-row tw-gap-2">
        <button bitButton buttonType="primary" (click)="dialogRef.close()">Save</button>
        <button bitButton buttonType="secondary" bitDialogClose>Cancel</button>
      </div>
    </bit-dialog>
  `,
})
class StoryTabbedDialogContentComponent {
  constructor(public dialogRef: DialogRef) {}
}

export default {
  title: "Component Library/Dialogs/Service",
  component: StoryDialogComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        DialogCloseDirective,
        DialogComponent,
        DialogTitleContainerDirective,
        StoryDialogContentComponent,
        StoryTabbedDialogContentComponent,
      ],
      imports: [
        SharedModule,
        ButtonModule,
        DialogModule,
        IconButtonModule,
        TabsModule,
        FormFieldModule,
      ],
      providers: [
        DialogService,
        {
          provide: I18nService,
          useFactory: () => {
            return new I18nMockService({
              close: "Close",
            });
          },
        },
      ],
    }),
  ],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zt3YSeb6E6lebAffrNLa0h/Tailwind-Component-Library",
    },
  },
} as Meta;

const Template: Story<StoryDialogComponent> = (args: StoryDialogComponent) => ({
  props: {
    ...args,
    dialogContentComponent: StoryDialogContentComponent,
    buttonText: "Open Dialog",
  },
});

export const Default = Template.bind({});

const TabbedTemplate: Story<StoryDialogComponent> = (args: StoryDialogComponent) => ({
  props: {
    ...args,
    dialogContentComponent: StoryTabbedDialogContentComponent,
    buttonText: "Open Tabbed Dialog",
  },
});

export const TabbedContent = TabbedTemplate.bind({});
