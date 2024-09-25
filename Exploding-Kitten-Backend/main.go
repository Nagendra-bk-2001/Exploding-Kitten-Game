package main

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"net/http"
	"time"

	"github.com/go-redis/redis/v8"
	"golang.org/x/net/context"
)

var ctx = context.Background()

// Redis client for storing game states and leaderboard
var rdb = redis.NewClient(&redis.Options{
	Addr: "localhost:6379",
})

// Card structure
type Card struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Emoji       string `json:"emoji"`
}

type GameStartResponse struct {
	Deck []Card `json:"deck"`
}

// Shuffle cards and create a new deck
func createDeck() []Card {
	cards := []Card{
		{"Cat", "A cute cat card", "😼"},
		{"Defuse", "Defuses the bomb", "🙅‍♂️"},
		{"Shuffle", "Shuffle the deck", "🔀"},
		{"Exploding Kitten", "Boom! You lose", "💣"},
	}
	// Fill deck with 5 cards (one of each)
	deck := append(cards, cards[rand.Intn(len(cards))]) // Add one random card for variety

	// Shuffle the deck
	rand.Seed(time.Now().UnixNano())
	rand.Shuffle(len(deck), func(i, j int) { deck[i], deck[j] = deck[j], deck[i] })

	return deck
}

func startGame(w http.ResponseWriter, r *http.Request) {
	// Enable CORS
	w.Header().Set("Access-Control-Allow-Origin", "*")
	if r.Method == "OPTIONS" {
		return
	}

	// Create and return a shuffled deck
	deck := createDeck()
	response := GameStartResponse{Deck: deck}
	json.NewEncoder(w).Encode(response)
}

func main() {
	http.HandleFunc("/api/start_game", startGame)

	fmt.Println("Server running at http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
