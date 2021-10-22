import FormModal from '../../components/FormModal'
import FormWizard from '../../components/FormWizard'
import { useFormik } from 'formik'
import {
  TextField,
  Grid,
  InputLabel,
  FormControl,
  Select,
  Typography,
} from '@material-ui/core'
import { MenuItem } from '@material-ui/core'
import { useState } from 'react'
import Button from '@material-ui/core/Button'
import * as yup from 'yup'

const CompanyIncorporationSchema = yup.object().shape({
  proposedNames: yup.object().shape({
    first: yup.string().required('Required'),
    second: yup.string().required('Required'),
    third: yup.string().required('Required'),
    fourth: yup.string().required('Required'),
  }),
  suffix: yup.string().required('Required'),
  companyAddress: yup.string().required('Required'),
  country: yup.string().required('Required'),
  state: yup.string().required('Required'),
  city: yup.string().required('Required'),
  description: yup.string().required('Required').min(10, 'Too Short!'),
  shareCapital: yup.number().required(),
})

const states = [
  'Abia',
  'Adamawa',
  'Akwa Ibom',
  'Anambra',
  'Bauchi',
  'Bayelsa',
  'Benue',
  'Borno',
  'Cross River',
  'Delta',
  'Ebonyi',
  'Edo',
  'Ekiti',
  'Enugu',
  'FCT - Abuja',
  'Gombe',
  'Imo',
  'Jigawa',
  'Kaduna',
  'Kano',
  'Katsina',
  'Kebbi',
  'Kogi',
  'Kwara',
  'Lagos',
  'Nasarawa',
  'Niger',
  'Ogun',
  'Ondo',
  'Osun',
  'Oyo',
  'Plateau',
  'Rivers',
  'Sokoto',
  'Taraba',
  'Yobe',
  'Zamfara',
]

const CompanyIncorporation = () => {
  const formik = useFormik({
    initialValues: {
      proposedNames: {
        first: '',
        second: '',
        third: '',
        fourth: '',
      },
      suffix: '',
      companyAddress: '',
      country: 'Nigeria',
      state: '',
      city: '',
      description: '',
      shareCapital: 1000000,
      shareholders: [],
    },
    validateOnBlur: true,
    validateOnMount: true,
    validationSchema: CompanyIncorporationSchema,
  })

  const [shareholderType, setShareholderType] = useState('Individual')
  const shareholderSchema = {
    Individual: {
      type: 'Individual',
      firstName: '',
      middleName: '',
      lastName: '',
      nationality: 'Nigerian',
      profileImg: '',
      dob: '',
      gender: '',
      idCardType: '',
      idCardNumber: '',
      idCardImg: '',
      address: '',
      country: '',
      state: '',
      city: '',
      email: '',
      phone: '',
      numberOfShares: '',
      director: false,
    },
    Company: {
      type: 'Company',
      companyName: '',
      rcNumber: '',
      country: '',
      certificate: '',
      address: '',
      country: '',
      state: '',
      city: '',
      email: '',
      phone: '',
      numberOfShares: '',
      director: false,
    },
  }

  const CompanyInformation = (
    <Grid container spacing={4}>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={12}>
          <Typography variant="body2">
            What are the proposed names for your business?*
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="proposedNames.first"
            name="proposedNames.first"
            label="First preferred name"
            value={formik.values.proposedNames.first}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="proposedNames.second"
            name="proposedNames.second"
            label="Second preferred name"
            value={formik.values.proposedNames.second}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="proposedNames.third"
            name="proposedNames.third"
            label="Third preferred name"
            value={formik.values.proposedNames.third}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="proposedNames.fourth"
            name="proposedNames.fourth"
            label="Fourth preferred name"
            value={formik.values.proposedNames.fourth}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={12}>
          <Typography variant="body2">
            What is the preferred suffix for your chosen name?*
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="preferredSuffixLabel">Age</InputLabel>
            <Select
              labelId="preferredSuffixLabel"
              id="demo-simple-select"
              name="suffix"
              value={formik.values.suffix}
              onChange={formik.handleChange}
            >
              <MenuItem value="Ltd">Ltd</MenuItem>
              <MenuItem value="Limited">Limited</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={12}>
          <Typography variant="body2">
            Registered Address of Company *
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="companyAddress"
            name="companyAddress"
            label="Registered Address *"
            value={formik.values.companyAddress}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="countryLabel">Country *</InputLabel>
            <Select
              labelId="countryLabel"
              id="country"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
            >
              <MenuItem value="">------</MenuItem>
              <MenuItem value="Nigeria">Nigeria</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="stateLabel">State *</InputLabel>
            <Select
              labelId="stateLabel"
              id="state"
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
            >
              <MenuItem value="">------</MenuItem>
              {states.map(state => (
                <MenuItem value={state} key={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="city"
            name="city"
            label="City *"
            value={formik.values.city}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={12}>
          <Typography variant="body2">
            Briefly describe primary nature and purposes of the business *
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="description"
            label="Describe the nature of your business"
            multiline
            name="description"
            fullWidth
            value={formik.values.description}
            onChange={formik.handleChange}
            rows={4}
          />
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={12}>
          <Typography variant="body2">
            What is the proposed share capital for the Company? *
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Select
              labelId="shareCapitalLabel"
              id="shareCapital"
              name="shareCapital"
              value={formik.values.shareCapital}
              onChange={formik.handleChange}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <MenuItem value={num * 10 ** 6} key={num}>
                  {new Intl.NumberFormat('en-NG', {
                    style: 'currency',
                    currency: 'NGN',
                  }).format(num * 10 ** 6)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  )

  const Shareholders = (
    <Grid container spacing={4}>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={12}>
          <Typography variant="body1">Shareholder(s) Information</Typography>
        </Grid>
        {formik.values.shareholders.length < 1 ? (
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              onClick={() =>
                formik.setFieldValue('shareholders', [
                  ...formik.values.shareholders,
                  shareholderSchema[shareholderType],
                ])
              }
            >
              Add Shareholder
            </Button>
          </Grid>
        ) : (
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography variant="body2">Shareholder is a/an: *</Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Select
                  labelId="shareholderType"
                  id="shareholderType"
                  value={shareholderType}
                  onChange={e => {
                    setShareholderType(e.target.value)
                    const removedItem = formik.values.shareholders.pop()
                    console.log(removedItem)
                    formik.setFieldValue('shareholders', [
                      ...formik.values.shareholders,
                      shareholderSchema[shareholderType],
                    ])
                  }}
                >
                  <MenuItem value="Individual">Individual</MenuItem>
                  <MenuItem value="Company">Company</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  )

  const formRender = {
    'Company Information': CompanyInformation,
    "Shareholder's Information": Shareholders,
  }

  const handleNext = () => {
    console.log(formik.values)
  }

  return (
    <FormModal title="Company Incorporation">
      <form onSubmit={formik.handleSubmit}>
        <FormWizard formData={formRender} next={handleNext} />
      </form>
    </FormModal>
  )
}

export default CompanyIncorporation
