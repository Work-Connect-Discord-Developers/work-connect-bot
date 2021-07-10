import { Role } from 'discord.js';

const hasRole = async (member: any, roleId: string): Promise<boolean> => {
  return await member?.roles.cache.find((role: Role) => role.id === roleId);
};

export default hasRole;
