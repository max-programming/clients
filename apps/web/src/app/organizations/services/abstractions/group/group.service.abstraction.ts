import { GroupView } from "../../../views/group.view";

import { GroupRequest } from "./requests/group.request";

export class GroupServiceAbstraction {
  delete: (orgId: string, groupId: string) => Promise<void>;
  deleteMany: (orgId: string, groupIds: string[]) => Promise<GroupView[]>;

  get: (orgId: string, groupId: string) => Promise<GroupView>;
  getAll: (orgId: string) => Promise<GroupView[]>;

  postGroup: (organizationId: string, request: GroupRequest) => Promise<GroupView>;
  putGroup: (organizationId: string, id: string, request: GroupRequest) => Promise<GroupView>;
}
