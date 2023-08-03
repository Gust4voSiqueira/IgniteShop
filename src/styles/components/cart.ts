import { styled } from '..'

import * as Dialog from '@radix-ui/react-dialog'

export const Title = styled(Dialog.Title, {
  paddingBottom: 30,
})

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  backgroundColor: '#00000075',
})

export const Content = styled(Dialog.Content, {
  width: '30vw',
  height: '100vh',
  backgroundColor: '$gray800',

  position: 'fixed',
  top: 0,
  right: 0,

  padding: 50,
  paddingRight: 20,
  paddingTop: 80,
})

export const Close = styled(Dialog.Close, {
  position: 'absolute',
  top: 30,
  right: 30,

  backgroundColor: 'transparent',
  border: 0,
  lineHeight: 0,
  cursor: 'pointer',
})

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

export const ProductsSection = styled('section', {
  height: '65%',
  overflow: 'auto',
})

export const ProductCartContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: '1rem',
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
