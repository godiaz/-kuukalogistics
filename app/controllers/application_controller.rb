class ApplicationController < ActionController::Base

	helper_method :mobile?

	def mobile?
	     request.user_agent =~ /\b(Android|iPhone|iPad|Windows Phone|Opera Mobi|Kindle|BackBerry|PlayBook)\b/i
	end  
	
end
