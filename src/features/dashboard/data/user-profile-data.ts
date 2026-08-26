import type { UserProfile } from "../types/user-profile.types";

import burgerAvatar from "../../../assets/Burger.png"

export const UserProfileData: UserProfile = {
    id: "user-1",
    name: "Delicious Burger",
    email: "deliciousburger@gmail.com",
    avatar: burgerAvatar,
    role: "Store Manager"
}
