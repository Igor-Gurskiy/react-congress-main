dev:
	docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d
run:
	docker-compose up -d
stop:
	docker-compose down