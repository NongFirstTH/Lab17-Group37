package com.websocket.demo.chat;


import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ChatMessage {
    private String content;
    private String timestamp;
    private String sender;
    private MessageType type;
    private String count;

    public void setCount(String count) {
        this.count = count;
    }
}
