import { settings } from './common/config.js';
import app from './app';
app.listen(settings.PORT, () => console.log(`App is running on http://localhost:${settings.PORT}`));
