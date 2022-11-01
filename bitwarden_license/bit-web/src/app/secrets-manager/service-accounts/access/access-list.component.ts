import { SelectionModel } from "@angular/cdk/collections";
import { Component, Input } from "@angular/core";

import { AccessTokenView } from "../models/view/access-token.view";

@Component({
  selector: "sm-access-list",
  templateUrl: "./access-list.component.html",
})
export class AccessListComponent {
  @Input() tokens: AccessTokenView[] = [];

  protected selection = new SelectionModel<string>(true, []);
}
