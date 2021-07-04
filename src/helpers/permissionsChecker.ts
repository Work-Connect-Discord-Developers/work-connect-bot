import { PermissionString } from "discord.js";

const permissionsChecker = (
  permissions: string[],
  memberPermissions: PermissionString[]
) => {
  return permissions.every((permission) =>
    memberPermissions.includes(permission as PermissionString)
  );
};

export default permissionsChecker;
