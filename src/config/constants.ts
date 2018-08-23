export const MAX_TIME_AND_SALES_COUNT = 50;
export const UPDATE_DELAY_MSEC = 1000;
export const UPDATE_INTERVAL_MSEC = 5000;
export const LAST_TRADE_INTERVAL_MSEC = 3000;
export const RECONNECT_DELAY_MSEC = 500;
export const RECONNECT_INTERVAL_MSEC = 2000;

// export const LOGOUT_DELAY_MSEC = 10 * 60 * 1000;
export const LOGOUT_DELAY_MSEC = 10000 * 60 * 1000;

// export const FOREX_QTY_DENOMINATOR = 1000000;
export const REGEX_ALL = '.*';
export const INT_MIN = '-2147483648';
export const TIME_FORMAT = 'yyyy-MM-dd HH:mm:ss';

// REST URLS
export const LOGIN_URL = 'axis2/services/Argo/logon';
export const LOGOUT_URL = 'axis2/services/Argo/logout';

export const GET_API_STATUS_URL = 'axis2/services/Argo/get_api_status';

export const GET_ACCOUNTS_URL = 'axis2/services/Argo/get_accounts';
export const GET_POSITIONS_URL = 'axis2/services/Argo/get_positions';

export const NEW_ORDER_URL = 'axis2/services/Argo/new_order';
export const REPLACE_ORDER_URL = 'axis2/services/Argo/replace_order';
export const CANCEL_ORDER_URL = 'axis2/services/Argo/cancel_order';

export const GET_ORDERS_URL = 'axis2/services/Argo/get_orders';

export const GET_INSTRUMENT_URL = 'axis2/services/Argo/get_instrument';
export const GET_TRADES_URL = 'axis2/services/Argo/get_trades';
