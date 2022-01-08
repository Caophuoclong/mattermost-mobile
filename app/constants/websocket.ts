// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
const WebsocketEvents = {
    POSTED: 'posted',
    POST_EDITED: 'post_edited',
    POST_DELETED: 'post_deleted',
    POST_UNREAD: 'post_unread',
    CHANNEL_CONVERTED: 'channel_converted',
    CHANNEL_CREATED: 'channel_created',
    CHANNEL_DELETED: 'channel_deleted',
    CHANNEL_UNARCHIVED: 'channel_restored',
    CHANNEL_UPDATED: 'channel_updated',
    CHANNEL_VIEWED: 'channel_viewed',
    CHANNEL_MEMBER_UPDATED: 'channel_member_updated',
    CHANNEL_SCHEME_UPDATED: 'channel_scheme_updated',
    DIRECT_ADDED: 'direct_added',
    ADDED_TO_TEAM: 'added_to_team',
    LEAVE_TEAM: 'leave_team',
    UPDATE_TEAM: 'update_team',
    USER_ADDED: 'user_added',
    USER_REMOVED: 'user_removed',
    USER_UPDATED: 'user_updated',
    USER_ROLE_UPDATED: 'user_role_updated',
    ROLE_ADDED: 'role_added',
    ROLE_REMOVED: 'role_removed',
    ROLE_UPDATED: 'role_updated',
    TYPING: 'typing',
    STOP_TYPING: 'stop_typing',
    PREFERENCE_CHANGED: 'preference_changed',
    PREFERENCES_CHANGED: 'preferences_changed',
    PREFERENCES_DELETED: 'preferences_deleted',
    EPHEMERAL_MESSAGE: 'ephemeral_message',
    STATUS_CHANGED: 'status_change',
    HELLO: 'hello',
    WEBRTC: 'webrtc',
    REACTION_ADDED: 'reaction_added',
    REACTION_REMOVED: 'reaction_removed',
    EMOJI_ADDED: 'emoji_added',
    LICENSE_CHANGED: 'license_changed',
    CONFIG_CHANGED: 'config_changed',
    PLUGIN_STATUSES_CHANGED: 'plugin_statuses_changed',
    OPEN_DIALOG: 'open_dialog',
    INCREASE_POST_VISIBILITY_BY_ONE: 'increase_post_visibility_by_one',
    MEMBERROLE_UPDATED: 'memberrole_updated',
    RECEIVED_GROUP: 'received_group',
    THREAD_UPDATED: 'thread_updated',
    THREAD_FOLLOW_CHANGED: 'thread_follow_changed',
    THREAD_READ_CHANGED: 'thread_read_changed',
    APPS_FRAMEWORK_REFRESH_BINDINGS: 'custom_com.mattermost.apps_refresh_bindings',
    SIDEBAR_CATEGORY_CREATED: 'sidebar_category_created',
    SIDEBAR_CATEGORY_UPDATED: 'sidebar_category_updated',
    SIDEBAR_CATEGORY_DELETED: 'sidebar_category_deleted',
    SIDEBAR_CATEGORY_ORDER_UPDATED: 'sidebar_category_order_updated',
    CALLS_CHANNEL_ENABLED: 'custom_com.mattermost.calls_channel_enable_voice',
    CALLS_CHANNEL_DISABLED: 'custom_com.mattermost.calls_channel_disable_voice',
    CALLS_USER_CONNECTED: 'custom_com.mattermost.calls_user_connected',
    CALLS_USER_DISCONNECTED: 'custom_com.mattermost.calls_user_disconnected',
    CALLS_USER_MUTED: 'custom_com.mattermost.calls_user_muted',
    CALLS_USER_UNMUTED: 'custom_com.mattermost.calls_user_unmuted',
    CALLS_USER_VOICE_ON: 'custom_com.mattermost.calls_user_voice_on',
    CALLS_USER_VOICE_OFF: 'custom_com.mattermost.calls_user_voice_off',
    CALLS_CALL_START: 'custom_com.mattermost.calls_call_start',
    CALLS_SCREEN_ON: 'custom_com.mattermost.calls_user_screen_on',
    CALLS_SCREEN_OFF: 'custom_com.mattermost.calls_user_screen_off',
};
export default WebsocketEvents;