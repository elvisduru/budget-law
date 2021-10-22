import FormModal from '../../components/FormModal'
import FormWizard from '../../components/FormWizard'
import { Formik, Form, Field, useFormikContext } from 'formik'
import { Grid, InputLabel, FormControl, Typography } from '@material-ui/core'
import { TextField, Select } from 'formik-material-ui'
import { MenuItem } from '@material-ui/core'
import { useState } from 'react'
import Button from '@material-ui/core/Button'
import * as yup from 'yup'
import useToggle from '../../hooks/useToggle'
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
  shareholders: yup.array().of(
    yup.lazy(item => {
      const { type } = item
      if (type === 'individual') {
        return yup.object().shape({
          type: yup.string().required('Required'),
          firstName: yup.string().required('Required'),
          middleName: yup.string().required('Required'),
          lastName: yup.string().required('Required'),
          nationality: yup.string().required('Required'),
          profileImg: yup.string().required('Required'),
          dob: yup.string().required('Required'),
          gender: yup.string().required('Required'),
          idCardType: yup.string().required('Required'),
          idCardNumber: yup.string().required('Required'),
          idCardImg: yup.string().required('Required'),
          address: yup.string().required('Required'),
          country: yup.string().required('Required'),
          state: yup.string().required('Required'),
          city: yup.string().required('Required'),
          email: yup.string().required('Required'),
          phone: yup.string().required('Required'),
          numberOfShares: yup.string().required('Required'),
          director: yup.boolean(),
        })
      }

      if (type === 'company') {
        return yup.object().shape({
          type: yup.string().required('Required'),
          companyName: yup.string().required('Required'),
          rcNumber: yup.string().required('Required'),
          certificate: yup.string().required('Required'),
          address: yup.string().required('Required'),
          country: yup.string().required('Required'),
          state: yup.string().required('Required'),
          city: yup.string().required('Required'),
          email: yup.string().required('Required'),
          phone: yup.string().required('Required'),
          numberOfShares: yup.string().required('Required'),
          director: yup.boolean(),
        })
      }
    }),
  ),
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

const shareholderSchema = {
  individual: {
    type: 'individual',
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
  company: {
    type: 'company',
    companyName: '',
    rcNumber: '',
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

const CompanyIncorporation = () => {
  const [shareholderCount, setShareholderCount] = useState(0)
  const [openSharehoder, toggleShareholder] = useToggle()
  const [shareholderType, setShareholderType] = useState('individual')
  const CompanyInformation = (
    <Grid container spacing={4}>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={12}>
          <Typography variant="body2">
            What are the proposed names for your business?*
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Field
            component={TextField}
            fullWidth
            name="proposedNames.first"
            label="First preferred name"
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            component={TextField}
            fullWidth
            name="proposedNames.second"
            label="Second preferred name"
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            component={TextField}
            fullWidth
            name="proposedNames.third"
            label="Third preferred name"
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            component={TextField}
            fullWidth
            name="proposedNames.fourth"
            label="Fourth preferred name"
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
            <Field component={Select} name="suffix">
              <MenuItem value="Ltd">Ltd</MenuItem>
              <MenuItem value="Limited">Limited</MenuItem>
            </Field>
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
          <Field
            component={TextField}
            fullWidth
            name="companyAddress"
            label="Registered Address *"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="countryLabel">Country *</InputLabel>
            <Field component={Select} name="country">
              <MenuItem value="">------</MenuItem>
              <MenuItem value="Nigeria">Nigeria</MenuItem>
            </Field>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="stateLabel">State *</InputLabel>
            <Field component={Select} name="state">
              <MenuItem value="">------</MenuItem>
              {states.map(state => (
                <MenuItem value={state} key={state}>
                  {state}
                </MenuItem>
              ))}
            </Field>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Field component={TextField} fullWidth name="city" label="City *" />
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={12}>
          <Typography variant="body2">
            Briefly describe primary nature and purposes of the business *
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Field
            component={TextField}
            label="Describe the nature of your business"
            multiline
            name="description"
            fullWidth
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
            <Field component={Select} name="shareCapital">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <MenuItem value={num * 10 ** 6} key={num}>
                  {new Intl.NumberFormat('en-NG', {
                    style: 'currency',
                    currency: 'NGN',
                  }).format(num * 10 ** 6)}
                </MenuItem>
              ))}
            </Field>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  )

  const Shareholders = () => {
    const { setFieldValue, values } = useFormikContext()
    return (
      <Grid container spacing={4}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12}>
            <Typography variant="body1">Shareholder(s) Information</Typography>
          </Grid>
          {shareholderCount < 1 && !openSharehoder ? (
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                onClick={() => {
                  toggleShareholder()
                  setShareholderCount(shareholderCount + 1)
                  setFieldValue('shareholders', [
                    ...values.shareholders,
                    shareholderSchema['individual'],
                  ])
                }}
              >
                Add Shareholder
              </Button>
            </Grid>
          ) : (
            <>
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    Shareholder is a/an: *
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <Field
                      component={Select}
                      onChange={e => {
                        setFieldValue(
                          `shareholders[${shareholderCount - 1}]`,
                          shareholderSchema[e.target.value],
                        )
                        console.log(e.target.value)
                      }}
                      name={`shareholders[${shareholderCount - 1}].type`}
                    >
                      <MenuItem value="">-Choose Option-</MenuItem>
                      <MenuItem value="individual">Individual</MenuItem>
                      <MenuItem value="company">Company</MenuItem>
                    </Field>
                  </FormControl>
                </Grid>
              </Grid>
              {shareholderType === 'individual' ? (
                <Grid item xs={12}>
                  <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        fullWidth
                        name={`shareholders[${shareholderCount - 1}].firstName`}
                        label="First name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        fullWidth
                        name={`shareholders[${
                          shareholderCount - 1
                        }].middleName`}
                        label="Middle name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        fullWidth
                        name={`shareholders[${shareholderCount - 1}].lastName`}
                        label="Last name"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              ) : (
                <Grid item xs={12}></Grid>
              )}
            </>
          )}
        </Grid>
      </Grid>
    )
  }

  const formRender = {
    // 'Company Information': CompanyInformation,
    "Shareholder's Information": <Shareholders />,
  }

  return (
    <FormModal title="Company Incorporation">
      <Formik
        initialValues={{
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
        }}
        validateOnBlur={true}
        validateOnMount={true}
        validationSchema={CompanyIncorporationSchema}
      >
        {({ errors, touched, validateForm }) => (
          <Form>
            <FormWizard
              formData={formRender}
              errors={errors}
              touched={touched}
              validateForm={validateForm}
            />
          </Form>
        )}
      </Formik>
    </FormModal>
  )
}

export default CompanyIncorporation
