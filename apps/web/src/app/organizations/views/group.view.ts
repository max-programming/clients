import { SelectionReadOnlyResponse } from "@bitwarden/common/models/response/selection-read-only.response";
import { View } from "@bitwarden/common/models/view/view";

import { GroupResponse } from "../services/group/responses/group.response";

export class GroupView implements View {
  id: string;
  organizationId: string;
  name: string;
  accessAll: boolean;
  externalId: string;
  collections: SelectionReadOnlyResponse[] = [];

  static fromResponse(response: GroupResponse) {
    return Object.assign(new GroupView(), response);
  }
}
