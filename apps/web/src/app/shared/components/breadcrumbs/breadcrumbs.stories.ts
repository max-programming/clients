import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Meta, Story, moduleMetadata } from "@storybook/angular";

import { LinkModule, MenuModule } from "@bitwarden/components";

import { PreloadedEnglishI18nModule } from "../../../tests/preloaded-english-i18n.module";

import { BreadcrumbComponent } from "./breadcrumb.component";
import { BreadcrumbsComponent } from "./breadcrumbs.component";

interface Breadcrumb {
  icon?: string;
  name: string;
  route: string;
}

@Component({})
class EmptyComponent {}

export default {
  title: "Web/Breadcrumbs",
  component: BreadcrumbsComponent,
  decorators: [
    moduleMetadata({
      declarations: [BreadcrumbComponent],
      imports: [
        LinkModule,
        MenuModule,
        PreloadedEnglishI18nModule,
        RouterModule.forRoot([{ path: "**", component: EmptyComponent }], { useHash: true }),
      ],
    }),
  ],
  args: {
    items: [],
  },
  argTypes: {
    breadcrumbs: {
      table: { disable: true },
    },
  },
} as Meta;

const Template: Story<BreadcrumbsComponent> = (args: BreadcrumbsComponent) => ({
  props: args,
  template: `
    <bit-breadcrumbs [show]="show">
      <bit-breadcrumb *ngFor="let item of items" [icon]="item.icon" [route]="[item.route]">{{item.name}}</bit-breadcrumb>
    </bit-breadcrumbs>
  `,
});

export const TopLevel = Template.bind({});
TopLevel.args = {
  items: [{ icon: "bwi-star", name: "Top Level" }] as Breadcrumb[],
};

export const SecondLevel = Template.bind({});
SecondLevel.args = {
  items: [
    { name: "Acme Vault", route: "/" },
    { icon: "bwi-collection", name: "Collection", route: "collection" },
  ] as Breadcrumb[],
};

export const Overflow = Template.bind({});
Overflow.args = {
  items: [
    { name: "Acme Vault", route: "" },
    { icon: "bwi-collection", name: "Collection", route: "collection" },
    { icon: "bwi-collection", name: "Middle-Collection 1", route: "middle-collection-1" },
    { icon: "bwi-collection", name: "Middle-Collection 2", route: "middle-collection-2" },
    { icon: "bwi-collection", name: "Middle-Collection 3", route: "middle-collection-3" },
    { icon: "bwi-collection", name: "Middle-Collection 4", route: "middle-collection-4" },
    { icon: "bwi-collection", name: "End Collection", route: "end-collection" },
  ] as Breadcrumb[],
};