CLIENT_IMAGE_NAME=webchat_client
SERVER_IMAGE_NAME=webchat_server

build: clean
	docker-compose build --no-cache
run:
	docker-compose up -d
stop:
	docker-compose down
clean: stop
	- docker rmi $(CLIENT_IMAGE_NAME)
	- docker rmi $(SERVER_IMAGE_NAME)
