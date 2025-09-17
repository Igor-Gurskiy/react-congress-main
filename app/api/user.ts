import { api } from "@/api";
import { CabinBackground } from "./cabin";
import { ApiResponseType, MeResponseType, UserType } from "./types";

export const userAPI = {
    whoami() {
        return api.get<MeResponseType>(`API?action=whoami`).then(res => res.data).catch(console.error)
    },
    getProfessionList() {
        return api.get<ProfessionListResponseType>(`API?action=profession_list`).then(res => res.data).catch(console.error)
    },
    setProfession(id: number) {
        return api.get<MeResponseType>(`API?action=set_profession&profession_id=${id}`).then(res => res.data).catch(console.error)
    },
    likesList() {
        return api.get<LikesResponseType>(`API?action=whatilike`).then(res => res.data).catch(console.error)
    },
    metadata() {
        return api.get<MetadataResponseType>(`API?action=metadata`).then(res => res.data).catch(console.error)
    }
}

export type ProfessionType = {
    sort: number
    visible: boolean
    id: number
    title: string
    info: null | string
    image: null | string
    class_version: string
}

interface ProfessionListResponseType extends ApiResponseType {
    profession_list: ProfessionType[]
}

type LikeType = {
    like: string
    user_id: number
    like_id: number
    created: string
}

export type AllowedLike = {
    count: number
    id: number
    like_id: string
    title: string
    enabled: boolean
}

interface LikesResponseType extends ApiResponseType {
    whatilike: LikeType[]
}

interface MetadataResponseType extends ApiResponseType {
    whoami: UserType
    profession_list: ProfessionType[]
    cabin_background_list: CabinBackground[]
    allowed_like_list: AllowedLike[]
    whatilike: LikeType[]
}
