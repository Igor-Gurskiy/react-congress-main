import styled from "styled-components"
import Box from "../Box"

const FileName = ({ name = '' }) => {
    return (
        <UploadText $mt={12}>{name ? name : 'Файл не выбран'}</UploadText>
    )
}

export default FileName

const UploadText = styled(Box)`
    font-weight: 300;
    font-size: 20px;
    line-height: 110%;
    text-align: center;
    color: #4F4F4F;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`