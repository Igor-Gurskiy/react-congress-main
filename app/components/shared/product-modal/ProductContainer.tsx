import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'

export const ProductRightContainer = styled.div`
	padding-right: 32px;
	position: relative;

	${media.md`
    padding: 0px 16px;
  `}
`

export const ProductLeftContainer = styled.div`
	padding: 16px 0px 0px 32px;

	${media.md`
    padding: 16px 16px 0px 16px;
  `}
`
