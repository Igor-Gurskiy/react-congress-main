import create from 'zustand'
import { combine } from 'zustand/middleware'

export const useVichyModalStore = create(combine(
    {
        newbie: true,
        animated: true,
        liftactiv: false,
        mineral: false,
        dercos: false,
        neovadiol: false,
        video: false,
        project: false,
        liftactivProject: false,
        inactive: false,
        brochure: false,
    },
    (set) => ({
        setNewbie: (newbie) => set({ newbie }),
        setAnimated: (animated) => set({ animated }),
        setLiftactiv: (liftactiv) => set({ liftactiv }),
        setMineral: (mineral) => set({ mineral }),
        setDercos: (dercos) => set({ dercos }),
        setNeovadiol: (neovadiol) => set({ neovadiol }),
        setVideo: (video) => set({ video }),
        setProject: (project) => set({ project }),
        setLiftactivProject: (liftactivProject) => set({ liftactivProject }),
        setInactive: (inactive) => set({ inactive }),
        setBrochure: (brochure) => set({ brochure }),
        closeAll: () => set({ liftactiv: false, mineral: false, dercos: false, neovadiol: false, video: false, project: false, liftactivProject: false }),
        closeAllExcept: (exception) => set({
            liftactiv: exception === 'liftactiv',
            mineral: exception === 'mineral',
            dercos: exception === 'dercos',
            neovadiol: exception === 'neovadiol',
            video: exception === 'video',
            project: exception === 'project',
            liftactivProject: exception === 'liftactivProject',
        }),
    })
))