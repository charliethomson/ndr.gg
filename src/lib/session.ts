import { createSession, createShim, s } from '@charliethomson/better-session';
import moment from 'moment';

export const session = createSession({
	lastVoteDt: s.custom(
		'LastVoteTime',
		createShim(moment, (m) => m.toISOString())
	)
});
