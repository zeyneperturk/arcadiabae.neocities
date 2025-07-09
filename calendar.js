const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const today = new Date();
console.log(`User Timezone: ${userTimezone}`);
console.log(`Today's Date: ${today.toLocaleDateString()} (${userTimezone})`);