export const displayAvatar = (avatarID, avatarsList) => {
  const filteredAvatar = avatarsList.filter((avatar) => avatar.id === avatarID);

  const { border, id, url } = filteredAvatar[0];

  return { border, id, url };
};
