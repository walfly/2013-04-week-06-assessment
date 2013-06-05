require 'sinatra'
require "sinatra/reloader" if development?
require 'active_record'
require 'pry'

configure :development, :production do
    ActiveRecord::Base.establish_connection(
       :adapter => 'sqlite3',
       :database =>  'db/dev.sqlite3.db'
     )
end

# Models to Access the database
# through ActiveRecord.
#
class Idea < ActiveRecord::Base
end

get '/' do
  # Serve your index.html here
end

post '/new' do
  # PUT CODE HERE TO SAVE IDEAS
end

# jquery has been included for your convenience
get '/jquery.js' do
  send_file 'jquery.js'
end

after do
  ActiveRecord::Base.clear_active_connections!
end
