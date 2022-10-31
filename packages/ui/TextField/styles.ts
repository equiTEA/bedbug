export const styles = {
  mb: 4.5,
  height: '27px',

  '& .MuiOutlinedInput-root .MuiInputBase-input::placeholder': {
    fontFamily: '"Albert Sans",  sans-serif !important',
    fontSize: '0.85rem !important',
  },

  '& label': {
    fontFamily: '"Albert Sans",  sans-serif !important',
    color: 'secondary.main',
  },

  '& label.Mui-focused': {
    color: 'secondary.main',
  },

  '& .MuiInput-underline:after': {
    borderBottomColor: 'secondary.main',
  },

  '& .MuiFormLabel-root': {
    color: 'secondary.main',
  },

  '& .MuiOutlinedInput-root': {
    color: 'secondary.main',

    '& fieldset': {
      borderColor: 'secondary.main',
    },

    '&:hover fieldset': {
      borderColor: 'secondary.main',
      borderWidth: 2,
    },

    '&.Mui-focused fieldset': {
      borderColor: 'secondary.main',
    },
  },
}
