import useImagePreloader from "@/hooks/useImagePreloader";

const preloadSrcList: string[] = [
    '/assets/images/vichy/formula/layers/cg.png',
    '/assets/images/vichy/formula/layers/glyco.png',
    '/assets/images/vichy/formula/layers/niacinamid.png',
    '/assets/images/vichy/formula/layers/peptides.png',
    '/assets/images/vichy/formula/layers/tranexam.png',
    '/assets/images/vichy/formula/layers/result.png',
    '/assets/images/vichy/formula/layers/correct.svg',
    '/assets/images/vichy/formula/layers/incorrect.svg',
]

const FormulaImagePreloader = () => {
    const { imagesPreloaded } = useImagePreloader(preloadSrcList)

    return null
}

export default FormulaImagePreloader