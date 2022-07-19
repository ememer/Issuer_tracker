interface AvatarsList {
  border: string;
  id: number;
  url: string;
}

export const displayAvatar = (avatarID: number, avatarsList: AvatarsList[]) => {
  const filteredAvatar = avatarsList.filter((avatar) => avatar.id === avatarID);

  const { border, id, url } = filteredAvatar[0];

  return { border, id, url };
};
