SHELL := /bin/bash
.PHONY: lint format dev dev-portal dev-api dev-worker portal-lint portal-format api-lint api-format worker-lint worker-format

portal-lint:
	@cd portal && pnpm lint
portal-format:
	@cd portal && pnpm format
portal-dev:
	@cd portal && pnpm dev

api-lint:
	@cd api && golangci-lint run
api-format:
	@cd api && go fmt ./... && go mod tidy
api-dev:
	@cd api && go run .

worker-lint:
	@cd worker && golangci-lint run
worker-format:
	@cd worker && go fmt ./... && go mod tidy
worker-dev:
	@cd worker && go run .

lint: portal-lint api-lint worker-lint
format: portal-format api-format worker-format
dev:
	@echo "Use: make dev-portal | make dev-api | make dev-worker"