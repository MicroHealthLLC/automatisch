import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';

import * as URLS from 'config/urls';
import AppIcon from 'components/AppIcon';
import type { App } from 'types/app';
import { GET_APPS } from 'graphql/queries/get-apps';
import useFormatMessage from 'hooks/useFormatMessage';

type AddNewAppConnectionProps = {
  onClose: () => void;
};

export default function AddNewAppConnection(props: AddNewAppConnectionProps){
  const { onClose } = props;
  const theme = useTheme();
  const matchSmallScreens = useMediaQuery(theme.breakpoints.down('sm'));
  const formatMessage = useFormatMessage();
  const [appName, setAppName] = useState<string | null>(null);
  const { data } = useQuery(GET_APPS, { variables: {name: appName } });

  return (
    <Dialog open={true} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {formatMessage('apps.addNewAppConnection')}
      </DialogTitle>

      <DialogContent>
        <FormControl
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
          size={matchSmallScreens ? 'small' : 'medium'}
        >
          <InputLabel
            htmlFor="search-app"
          >
            {formatMessage('apps.searchApp')}
          </InputLabel>

          <OutlinedInput
            id="search-app"
            type="text"
            fullWidth
            onChange={(event) => setAppName(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon sx={{ color: (theme) => theme.palette.primary.main }} />
              </InputAdornment>
            }
            label={formatMessage('apps.searchApp')}
          />
        </FormControl>

        <List sx={{ pt: 2 }}>
          {data?.getApps?.map((app: App) => (
            <ListItem disablePadding key={app.name}>
              <ListItemButton component={Link} to={URLS.APP_ADD_CONNECTION(app.name.toLowerCase())}>
                <ListItemIcon>
                  <AppIcon color={app.primaryColor} url={app.iconUrl} name={app.name} />
                </ListItemIcon>
                <ListItemText primary={app.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};