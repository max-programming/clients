import { Observable } from "rxjs";

import { Organization } from "@bitwarden/common/src/models/domain/organization";
import { TreeNode } from "@bitwarden/common/src/models/domain/tree-node";
import { CollectionView } from "@bitwarden/common/src/models/view/collection.view";
import { FolderView } from "@bitwarden/common/src/models/view/folder.view";

import {
  CipherTypeFilter,
  CollectionFilter,
  FolderFilter,
  OrganizationFilter,
} from "../../shared/models/vault-filter.type";

export abstract class VaultFilterService {
  collapsedFilterNodes$: Observable<Set<string>>;
  filteredFolders$: Observable<FolderView[]>;
  filteredCollections$: Observable<CollectionView[]>;
  organizationTree$: Observable<TreeNode<OrganizationFilter>>;
  folderTree$: Observable<TreeNode<FolderFilter>>;
  collectionTree$: Observable<TreeNode<CollectionFilter>>;
  reloadCollections: () => Promise<void>;
  setCollapsedFilterNodes: (collapsedFilterNodes: Set<string>) => Promise<void>;
  expandOrgFilter: () => Promise<void>;
  setOrganizationFilter: (organization: Organization) => void;
  buildTypeTree: (
    head: CipherTypeFilter,
    array: CipherTypeFilter[]
  ) => Observable<TreeNode<CipherTypeFilter>>;
}
