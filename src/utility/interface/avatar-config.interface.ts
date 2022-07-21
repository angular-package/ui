// Avatar.a
import { SAvatarPresence, SAvatarSize } from '../../spectre/avatar';

/**
 *
 */
export interface SAvatarConfig {
  fullName?: string;
  initials?: string;
  presence?: SAvatarPresence;
  size?: SAvatarSize;
  src?: string;
}
