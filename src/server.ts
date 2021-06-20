import { PORT } from './common/config';
import app from './app';
import { TryDBConnect } from './helpers/db';

TryDBConnect(() => {
  app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));
});
