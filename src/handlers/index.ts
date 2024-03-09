// Crags
import { CreateCragHandler as CreateCragHandlerClass } from './crags/create-crag-handler';
import { UpdateCragHandler as UpdateCragHandlerClass } from './crags/update-crag-handler';
import { ViewCragClimbsHandler as ViewCragClimbsHandlerClass } from './crags/view-crag-climbs-handler';
import { ViewCragHandler as ViewCragHandlerClass } from './crags/view-crag-handler';

export const CreateCragHandler = new CreateCragHandlerClass();
export const UpdateCragHandler = new UpdateCragHandlerClass();
export const ViewCragClimbsHandler = new ViewCragClimbsHandlerClass();
export const ViewCragHandler = new ViewCragHandlerClass();

// General Discord
import { ErrorHandler as ErrorHandlerClass } from './discord/error-handler';
import { InteractionHandler as InteractionHandlerClass } from './discord/interaction-handler';
import { MessageCreateHandler as MessageCreateHandlerClass } from './discord/message-create-handler';
import { ReadyHandler as ReadyHandlerClass } from './discord/ready-handler';

export const ErrorHandler = new ErrorHandlerClass();
export const InteractionHandler = new InteractionHandlerClass();
export const MessageCreateHandler = new MessageCreateHandlerClass();
export const ReadyHandler = new ReadyHandlerClass();

// Routes
import { AddRouteHandler as AddRouteHandlerClass } from './routes/add-route-handler';
import { DeleteRouteAttemptHandler as DeleteRouteAttemptHandlerClass} from './routes/delete-route-attempt-handler';
import { EditRouteAttemptHandler as EditRouteAttemptHandlerClass} from './routes/edit-route-attempt-handler';
import { EditRouteHandler as EditRouteHandlerClass} from './routes/edit-route-handler';
import { LogRouteAttemptHandler as LogRouteAttemptHandlerClass} from './routes/log-route-attempt-handler';

export const AddRouteHandler = new AddRouteHandlerClass();
export const DeleteRouteAttemptHandler = new DeleteRouteAttemptHandlerClass();
export const EditRouteAttemptHandler = new EditRouteAttemptHandlerClass();
export const EditRouteHandler = new EditRouteHandlerClass();
export const LogRouteAttemptHandler = new LogRouteAttemptHandlerClass();

// Sessions
import { DeleteSessionHandler as DeleteSessionHandlerClass } from './sessions/delete-session-handler';
import { EditSessionHandler as EditSessionHandlerClass } from './sessions/edit-session-handler';
import { LogSessionHandler as LogSessionHandlerClass } from './sessions/log-session-handler';

export const DeleteSessionHandler = new DeleteSessionHandlerClass();
export const EditSessionHandler = new EditSessionHandlerClass();
export const LogSessionHandler = new LogSessionHandlerClass();

// Weather
import { MoveSubscriptionHandler as MoveSubscriptionHandlerClass } from './weather/move-subscription-handler';
import { SubscribeToWeatherHandler as SubscribeToWeatherHandlerClass } from './weather/subscribe-to-weather-handler';
import { UnsubscribeToWeatherHandler as UnsubscribeToWeatherHandlerClass } from './weather/unsubscribe-to-weather-handler';
import { UpdateSubscriptionHandler as UpdateSubscriptionHandlerClass } from './weather/update-subscription-handler';
import { ViewWeatherHandler as ViewWeatherHandlerClass } from './weather/view-weather-handler';

export const MoveSubscriptionHandler = new MoveSubscriptionHandlerClass();
export const SubscribeToWeatherHandler = new SubscribeToWeatherHandlerClass();
export const UnsubscribeToWeatherHandler = new UnsubscribeToWeatherHandlerClass();
export const UpdateSubscriptionHandler = new UpdateSubscriptionHandlerClass();
export const ViewWeatherHandler = new ViewWeatherHandlerClass();
