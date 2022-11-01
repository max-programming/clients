import { BaseResponse } from "@bitwarden/common/models/response/base.response";

export class AccessTokenResponse extends BaseResponse {
  id: string;
  name: string;
  scope: string[];
  expiresAt: string;
  creationDate: string;
  revisionDate: string;

  constructor(response: any) {
    super(response);
    this.id = this.getResponseProperty("Id");
    this.name = this.getResponseProperty("Name");
    this.scope = this.getResponseProperty("ApiKey");
    this.expiresAt = this.getResponseProperty("ExpiresAt");
    this.creationDate = this.getResponseProperty("CreationDate");
    this.revisionDate = this.getResponseProperty("RevisionDate");
  }
}
