import { View } from "@bitwarden/common/models/view/view";

export class AccessTokenView implements View {
  id: string;
  name: string;
  expireAt: string;
  creationDate: string;
  revisionDate: string;
}
