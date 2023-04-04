import { ChatMessage } from "./chat-message"

export interface Chat {
    ChatId: number
    ChatTitle: string
    ItemId: number
    Messages: Array<ChatMessage>
}
