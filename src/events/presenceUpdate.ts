import { Event } from '../interfaces';
import stopAddingHours from '../helpers/stopAddingHours';

const event: Event = {
  name: 'presenceUpdate',
  run: async (client, oldMember, newMember) => {
    if (newMember.member.presence.status === 'offline') {
      if (
        newMember.member.roles.cache.find(
          (r: any) => r.name === 'Personas trabajando'
        )
      ) {
        stopAddingHours(newMember.member);
      }
    }
    if (oldMember) return;
  },
};

export default event;
