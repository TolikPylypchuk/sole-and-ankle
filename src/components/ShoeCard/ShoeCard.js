import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
          <Tag show={variant !== 'default'} sale={variant === 'on-sale'}>
            {variant === 'on-sale' ? 'Sale' : 'Just released!'}
          </Tag>
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price sale={variant === 'on-sale'}>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          <SalePrice sale={variant === 'on-sale'}>{formatPrice(salePrice)}</SalePrice>
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  flex: 1;
`;

const Wrapper = styled.article`
  min-width: 350px;
  max-width: 450px;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;

const Tag = styled.div`
  display: ${p => p.show ? 'initial' : 'none'};
  position: absolute;
  top: 12px;
  right: -4px;
  font-size: ${14 / 16}rem;
  font-weight: 700;
  background-color: ${p => p.sale ? COLORS.primary : COLORS.secondary};
  color: ${COLORS.white};
  padding: 8px 12px;
  border-radius: 2px;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  text-decoration: ${p => p.sale ? 'line-through' : 'none'};
  color: ${p => p.sale ? COLORS.gray[700] : 'initial'};
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
  display: ${p => p.sale ? 'initial' : 'none'};
`;

export default ShoeCard;
