import * as React from 'react';
import s from '../../styles/main.module.scss';
import { Box, TextField, Button } from '@mui/material';
import classNames from 'classnames';

const Meals = (): JSX.Element => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [errors, setErrors] = React.useState({
    firstName: '',
    lastName: '',
    lookup: <></>,
  });

  const handleFirstNameChange = (e: any) => {
    setErrors({ ...errors, firstName: '' });
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e: any) => {
    setErrors({ ...errors, lastName: '' });
    setLastName(e.target.value);
  };

  const handleSearchName = () => {
    setErrors({
      ...errors,
      firstName: firstName ? '' : 'Enter a first name',
      lastName: lastName ? '' : 'Enter a last name',
      lookup: <></>
    });

    if (!firstName || !lastName) return;
    setErrors({...errors, lookup: <div>The actual site would send the name to a lambda function that would query RDS and return the guest data. Guests would then select their name from a dropdown and be able to submit their meal selection and dietary restrictions. For the original code, see my old Github <a href='https://github.com/alexandermichaud-drizly/wedding/blob/main/src/pages/components/tabs/meals.tsx'>here</a>.</div>})
  };

  return (
    <div className={s.RsvpContainer}>
      <h1>Wedding Dinner Selection</h1>
      <div>
        All guests will enjoy a five-course Italian feast on the evening of our
        wedding. Most guests will be served one of two menus, depending on their
        choice of a main course. Here are the entrées to choose from:
      </div>
      <div className={s.FeastEntrees}>
        Chicken medallion wrapped in strips of Tuscan bacon, with a side of
        Scarpaccia and grilled vegetables
      </div>
      <div className={s.FeastEntrees}>
        Rossini filet served with foie gras, black truffle and housemade Vin
        Santo, with a side of potato torte
      </div>
      <div>
        {
          "The chef can also prepare menus that do not include meat or gluten. Due to their preparation, the entrées listed above are not available on the gluten-free menu. Menus without meat or gluten will vary significantly depending on the individual's specific combination of dietary needs, e.g. the standard vegan menu may be substantially different from a vegan menu that is also gluten-free."
        }{' '}
        <span className={s.MealPreferenceBold}>
          {
            'Please only select these options if you are a practicing vegetarian or vegan, or if you are gluten-intolerant.'
          }
        </span>
      </div>
      <div className={s.Instructions}>
        We ask that you share your meal preference and dietary restrictions by{' '}
        <span className={s.MealPreferenceBold}>January 23, 2023</span>. To
        submit your selection, start by entering your first and last name below.
      </div>
      <Box className={s.RSVP}>
        <TextField
          label="First Name"
          InputProps={{ onChange: handleFirstNameChange }}
          error={!!errors.firstName}
          helperText={errors.firstName}
          classes={{
            root: classNames(s.TextField, s.Root),
          }}
        />
        <TextField
          label="Last Name"
          InputProps={{ onChange: handleLastNameChange }}
          error={!!errors.lastName}
          helperText={errors.lastName}
          classes={{
            root: classNames(s.TextField, s.Root),
          }}
        />
        <Button
          variant="text"
          onClick={handleSearchName}
          classes={{ root: classNames(s.SearchButton, s.Root) }}
        >
          Search
        </Button>
        {errors.lookup ? <div>{errors.lookup}</div> : <></>}
      </Box>
    </div>
  );
};

export default Meals;
