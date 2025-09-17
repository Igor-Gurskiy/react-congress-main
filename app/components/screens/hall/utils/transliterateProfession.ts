const transliterateProfession = (title: string) => {
    if (title.toLowerCase().includes('дерматолог')){
        return 'dermatology'
    }
    if (title.toLowerCase().includes('аллерголог')){
        return 'allerg'
    }
    if (title.toLowerCase().includes('онколог')){
        return 'oncology'
    }
    if (title.toLowerCase().includes('терапевт')){
        return 'therapy'
    }
    if (title.toLowerCase().includes('педиатр')){
        return 'pediatrics'
    }
    if (title.toLowerCase().includes('фармацевт')){
        return 'pharmacy'
    }
    return null
}

export default transliterateProfession