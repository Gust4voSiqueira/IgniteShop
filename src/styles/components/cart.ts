import { styled } from '..'

export const EmptyCart = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',

  h3: {
    fontSize: '$xl',
  },
})

export const ProductCartContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: '2rem',
  width: '100%',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 100,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  marginRight: 20,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const InfoProductContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  height: 100,

  span: {
    fontSize: '$md',
    color: '$gray300',
  },

  b: {
    fontSize: '$md',
    color: '$gray100',
  },

  button: {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: '$green500',
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export const FooterCart = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  bottom: 70,
  width: '85%',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 15,

    '.quantitieText': {
      fontSize: '$sm',
    },

    '.totalValue': {
      fontSize: '$md',
    },

    h3: {
      fontSize: '$xl',
    },
  },

  '.finnallyButton': {
    backgroundColor: '$green500',
    padding: 20,
    borderRadius: 7,

    color: '$white',
    fontWeight: 'bold',
    fontSize: 18,

    '&:hover': {
      transition: '0.3s',
      cursor: 'pointer',
      backgroundColor: '$green700',
    },
  },
})
